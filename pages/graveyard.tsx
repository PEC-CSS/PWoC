import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageLayout from "../components/layout/PageLayout";
import { TopThree } from "../components/leaderboard/TopThree";
import { LeaderboardTable } from "../components/leaderboard/LeaderboardTable";
import { Item } from "../typings/types";
import tombstone from "../public/assets/animations/tombstone.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function Graveyard() {
    const [leaderboard, setLeaderboard] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures animations only run on the client
        const fetchGraveyardData = async () => {
            try {
                const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
                const response = await fetch(`${baseURL}/graveyard`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setLeaderboard(data);
            } catch (error) {
                console.error("Failed to fetch graveyard data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGraveyardData();
    }, []);

    return (
        <PageLayout title="PWOC | Graveyard" description="A place to bury programming mistakes">
            <div className="flex flex-col items-center my-[30px] w-full">
                <div className="font-bold text-[40px]">Graveyard</div>
                <div>Because every programmer needs a place to bury their mistakes and learn from them</div>
                <div className="flex items-center flex-col w-full my-[20px]">
                    {leaderboard.length > 0 ? (
                        <>
                            <TopThree topList={leaderboard.slice(0, 3)} />
                            <LeaderboardTable leaderboard={leaderboard} />
                        </>
                    ) : (
                        <div className="flex flex-col items-center my-[30px]">
                            {isClient && <Lottie animationData={tombstone} loop className="h-[300px] w-auto my-[30px]" />}
                            <div className="font-bold text-[30px] animate-pulse">Loading, please wait..</div>
                        </div>
                    )}
                </div>
            </div>
        </PageLayout>
    );
}

export default Graveyard;