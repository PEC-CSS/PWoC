import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Item } from '../typings/types';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import Lottie from 'react-lottie-player';
import snowman from '../public/assets/animations/snowman.json';
import { TopThree } from '../components/leaderboard/TopThree';
import PageLayout from '../components/layout/PageLayout';


const Leaderboard: NextPage = () => {
	const [leaderboard, setLeaderboard] = useState<Item[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	// Fetch leaderboard data from the server
	const fetchLeaderboard = async () => {
		try {
			const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
			console.log(baseURL)
			const leaderboardURL = `${baseURL}/leaderboard`;
			const response = await fetch(leaderboardURL);
			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
			const data = await response.json();
			setLeaderboard(data);
		} catch (error) {
			console.error('Failed to fetch leaderboard:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchLeaderboard();
	}, []);


	return (
		<PageLayout
			title='PWOC | Leaderboard'
			description='Leaderboard of PWoC, based on PR count in the given period of the event. Only participants with merged PRs appear here.'
		>
			<div className='flex items-center flex-col'>
				{leaderboard.length > 2 ? (
					<>
						<TopThree topList={leaderboard.slice(0, 3)} />
						<LeaderboardTable leaderboard={leaderboard} />
					</>
				) : leaderboard.length > 0?(
					<>
						<LeaderboardTable leaderboard={leaderboard} />
					</>
				):(
					<div className='flex flex-col items-center my-[30px]'>
						<Lottie
							play
							loop
							animationData={snowman}
							className='h-[300px] w-auto my-[30px]'
						/>
						<div className='font-bold text-[30px] animate-pulse'>
							Loading, please wait..
						</div>
					</div>
				)}
			</div>
		</PageLayout>
	);
};

export default Leaderboard;
