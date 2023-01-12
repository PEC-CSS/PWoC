import { NextPage } from 'next';
import { Octokit } from '@octokit/rest';
import { contributors, repositories } from '../public/data';
import { useEffect, useState } from 'react';
import { Item, PullRequest } from '../public/types';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import Lottie from 'react-lottie-player';
import snowman from '../public/assets/animations/snowman.json';
import { TopThree } from '../components/leaderboard/TopThree';
import PageLayout from '../components/layout/PageLayout';

const Leaderboard: NextPage = () => {
	const [leaderboard, setLeaderboard] = useState<Item[]>([]);

	const getPullRequests = async () => {
		let octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
		let repoRequests = repositories.map((repo: string) => {
			let query = `type:pr+repo:${repo}`;
			contributors.forEach((user) => {
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
		contributors.forEach((user) => {
			pullRequestMap.set(user.username, []);
			nameMap.set(user.username, user.name);
		});
		repoResponses.forEach((pullRequests: PullRequest[]) => {
			pullRequests.forEach((pullRequest: PullRequest) => {
				pullRequestMap.get(pullRequest.user.login)?.push(pullRequest);
			});
		});
		let leaderboard: Item[] = [];
		pullRequestMap.forEach(
			(pullRequests: PullRequest[], username: string) => {
				if (pullRequests.length === 0) return;
				leaderboard.push({
					user: {
						username: username,
						name: nameMap.get(username) || username,
						avatar_url: pullRequests[0].user.avatar_url,
						html_url: pullRequests[0].user.html_url,
					},
					pullRequests: pullRequests,
					points: pullRequests.length,
				});
			}
		);
		leaderboard.sort((item1: Item, item2: Item) => {
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
				{/* <Head>
					<title>Leaderboard</title>
					<meta
						name='description'
						content='Leaderboard for winter of code'
					/>
				</Head> */}
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
							Preparing the leaderboard...
						</div>
					</div>
				)}
			</div>
		</PageLayout>
	);
};

export default Leaderboard;
