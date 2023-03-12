import React, {useEffect, useState} from 'react';
import PageLayout from '../components/layout/PageLayout';
import Lottie from 'react-lottie-player';
import {TopThree} from "../components/leaderboard/TopThree";
import {LeaderboardTable} from "../components/leaderboard/LeaderboardTable";
import tombstone from "../public/assets/animations/tombstone.json";
import {Contributor, Item, PullRequest} from "../typings/types";
import {Octokit} from "@octokit/rest";
import {getContributors} from "../utils/spreadsheet";

function Graveyard() {
	const [leaderboard, setLeaderboard] = useState<Item[]>([])

	const getPullRequests = async ()=> {
		const octokit = new Octokit({auth : process.env.ACCESS_TOKEN})
		const contributors = await getContributors()
		const pullRequestResponse = await octokit.rest.pulls.list({
			owner: "PEC-CSS",
			base: undefined,
			baseUrl: undefined,
			direction: undefined,
			head: undefined,
			headers: undefined,
			mediaType: {},
			page: 1,
			per_page: 100,
			repo: "graveyard",
			request: undefined,
			sort: undefined,
			state: "closed"
		})
		const pullRequests = pullRequestResponse.data as PullRequest[];

		const pullRequestResponse2 = await octokit.rest.pulls.list({
			owner: "PEC-CSS",
			base: undefined,
			baseUrl: undefined,
			direction: undefined,
			head: undefined,
			headers: undefined,
			mediaType: {},
			page: 2,
			per_page: 100,
			repo: "graveyard",
			request: undefined,
			sort: undefined,
			state: "closed"
		})
		const pullRequests2 = pullRequestResponse2.data as PullRequest[];

		pullRequests.push(...pullRequests2)

		let pullRequestMap = new Map<string, PullRequest[]>();
		let nameMap = new Map<string, string>();
		contributors.forEach((user: Contributor) => {
			if(user.username.length === 0) return
			pullRequestMap.set(user.username, []);
			nameMap.set(user.username, user.name);
		});

		pullRequests.forEach((pullRequest: PullRequest) => {
			let labels = pullRequest.labels.map((label) => label.name.trim().toLowerCase())
			pullRequest.repository_url = pullRequest.html_url.split('/').slice(0, 5).join('/')
			if(
				labels.includes("pwoc") &&
				(labels.includes("hard") || labels.includes("medium") || labels.includes("easy") || labels.includes("graveyard")) &&
				pullRequest.merged_at != null
			) {
				pullRequestMap.get(pullRequest.user.login)?.push(pullRequest);
			}
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
					else if(labels.includes("easy")) points += 2
					else points += 1
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
				return (item1.pullRequests[0].closed_at.localeCompare(item2.pullRequests[0].closed_at))
			}
			return item2.points - item1.points;
		});
		// console.log(leaderboard)
		return leaderboard;
	}

	useEffect(() => {
		getPullRequests()
			.then(res => setLeaderboard(res))
			.catch(error=> console.error(error))
	},[])

	return (
		<PageLayout
			title='PWOC | Graveyard'
			description='Because every programmer needs a place to bury their mistakes and learn from them'
		>
			<div className='flex flex-col items-center my-[30px] w-full'>
				<div className="font-bold text-[40px]">Graveyard</div>
				<div>Because every programmer needs a place to bury their mistakes and learn from them</div>
				<div className='flex items-center flex-col w-full my-[20px]'>
					{leaderboard.length > 0 ? (
						<>
							<TopThree topList={leaderboard.slice(0, 3)} />
							<LeaderboardTable leaderboard={leaderboard} />
						</>
					) : (
						<div className='flex flex-col items-center my-[30px]'>
							<Lottie
								play
								loop
								animationData={tombstone}
								className='h-[300px] w-auto my-[30px]'
							/>
							<div className='font-bold text-[30px] animate-pulse'>
								Loading, please wait..
							</div>
						</div>
					)}
				</div>
			</div>
		</PageLayout>
	);
}

export default Graveyard;
