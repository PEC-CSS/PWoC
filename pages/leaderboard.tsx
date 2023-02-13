import { NextPage } from 'next';
import { Octokit } from '@octokit/rest';
import { useEffect, useState } from 'react';
import {Contributor, Item, Project, PullRequest} from '../typings/types';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import Lottie from 'react-lottie-player';
import snowman from '../public/assets/animations/snowman.json';
import { TopThree } from '../components/leaderboard/TopThree';
import PageLayout from '../components/layout/PageLayout';
import {getContributors, getProjects} from "../utils/spreadsheet";

const Leaderboard: NextPage = () => {
	const [leaderboard, setLeaderboard] = useState<Item[]>([]);

	const getPullRequests = async () => {
		let octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
		let projects = await getProjects()
		let repositories = projects.map((project: Project) => {
			return project.githubLink.trim().replace("https://github.com/", "")
		})
		let contributors = await getContributors()
		let repoRequests = repositories.map((repo: string) => {
			let query = `type:pr+repo:${repo}+label:pwoc+created:2023-01-26..2023-03-01+is:merged`;
			contributors.forEach((user: Contributor) => {
				if(user.username.length === 0) return;
				query += `+author:${user.username}`;
			});
			return octokit.rest.search
				.issuesAndPullRequests({
					q: query,
					per_page: 100,
				})
				.then((res) => res.data.items);
		});
		let repoResponses = (await Promise.all(
			repoRequests
		)) as PullRequest[][];
		let pullRequestMap = new Map<string, PullRequest[]>();
		let nameMap = new Map<string, string>();
		contributors.forEach((user: Contributor) => {
			if(user.username.length === 0) return
			pullRequestMap.set(user.username, []);
			nameMap.set(user.username, user.name);
		});
		repoResponses.forEach((pullRequests: PullRequest[]) => {
			pullRequests.forEach((pullRequest: PullRequest) => {
				if(pullRequest.labels.filter((label) => {
					let name = label.name.trim().toLowerCase()
					return name === "easy" || name === "medium" || name === "hard"
				}).length === 0) {
					return
				}
				pullRequestMap.get(pullRequest.user.login)?.push(pullRequest);
			});
		});
		let leaderboard: Item[] = [];
		pullRequestMap.forEach(
			(pullRequests: PullRequest[], username: string) => {
				if (pullRequests.length === 0) return;
				let points = 0
				pullRequests.forEach((pullRequest) => {
					let labels = pullRequest.labels.map((label) => { return label.name.trim().toLowerCase() })
					if(labels.includes("hard")) points += 6
					else if(labels.includes("medium")) points += 4
					else points += 2
				})
				try {
					leaderboard.push({
						user: {
							username: username,
							name: nameMap.get(username) || username,
							avatar_url: pullRequests[0].user.avatar_url,
							html_url: pullRequests[0].user.html_url,
						},
						pullRequests: pullRequests.sort((p1, p2) => p2.closed_at.localeCompare(p1.closed_at)),
						points: points
					});
				} catch (e) {
					console.log(e)
				}
			}
		);
		leaderboard.sort((item1: Item, item2: Item) => {
			if(item2.points == item1.points) {
				// if item1 smol => item1 first => negative return
				return (item1.pullRequests[0].closed_at.localeCompare(item2.pullRequests[0].closed_at))
			}
			return item2.points - item1.points;
		});
		return leaderboard;
	};

	useEffect(() => {
		getPullRequests()
			.then((itemList) => setLeaderboard(itemList))
			.catch((error) => console.error(error));
	}, []);

	return (
		<PageLayout
			title='PWOC | Leaderboard'
			description='Leaderboard of PWoC, based on PR count in the given period of the event. Only participants with merged PRs appear here.'
		>
			<div className='flex items-center flex-col'>
				{leaderboard.length > 0 && process.env.NEXT_PUBLIC_DEV ? (
					<>
						<TopThree topList={leaderboard.slice(0, 3)} />
						<LeaderboardTable leaderboard={leaderboard} />
					</>
				) : (
					<div className='flex flex-col items-center my-[30px]'>
						<Lottie
							play
							loop
							animationData={snowman}
							className='h-[300px] w-auto my-[30px]'
						/>
						<div className='font-bold text-[30px] animate-pulse'>
							Working on fixes, please come back later
						</div>
					</div>
				)}
			</div>
		</PageLayout>
	);
};

export default Leaderboard;
