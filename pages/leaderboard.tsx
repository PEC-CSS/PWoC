import { NextPage } from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Item } from "../typings/types";
import { LeaderboardTable } from "../components/leaderboard/LeaderboardTable";
import {TopThree}  from "../components/leaderboard/TopThree";
import PageLayout from "../components/layout/PageLayout";
import snowman from "../public/assets/animations/snowman.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Leaderboard: NextPage = () => {
    const [leaderboard, setLeaderboard] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensure animations only run on the client
        const fetchLeaderboard = async () => {
            try {
                const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
                const response = await fetch(`${baseURL}/leaderboard`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setLeaderboard(data);
            } catch (error) {
                console.error("Failed to fetch leaderboard:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <PageLayout title="PWOC | Leaderboard" description="Leaderboard of PWoC">
            <div className="flex items-center flex-col">
                {leaderboard.length > 2 ? (
                    <>
                        <TopThree topList={leaderboard.slice(0, 3)} />
                        <LeaderboardTable leaderboard={leaderboard} />
                    </>
                ) : leaderboard.length > 0 ? (
                    <LeaderboardTable leaderboard={leaderboard} />
                ) : (
                    <div className="flex flex-col items-center my-[30px]">
                        {isClient && <Lottie animationData={snowman} loop className="h-[300px] w-auto my-[30px]" />}
                        <div className="font-bold text-[30px] animate-pulse">Loading, please wait..</div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default Leaderboard;