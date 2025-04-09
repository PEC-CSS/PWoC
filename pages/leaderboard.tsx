import { NextPage } from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Item } from "../typings/types";
import { LeaderboardTable } from "../components/leaderboard/LeaderboardTable";
import { TopThree } from "../components/leaderboard/TopThree";
import PageLayout from "../components/layout/PageLayout";
import snowman from "../public/assets/animations/snowman.json";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Leaderboard: NextPage = () => {
    const [leaderboard, setLeaderboard] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isClient, setIsClient] = useState(false);
    const [showNotification, setShowNotification] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);

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

        // Initial fetch
        fetchLeaderboard();

        // Show notification on page load
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);

        // Refresh leaderboard every 5 minutes and show notification
        const interval = setInterval(() => {
            fetchLeaderboard();
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 4000);
        }, 5 * 60 * 1000); // 5 minutes

        return () => clearInterval(interval);
    }, []);

    return (
        <PageLayout title="PWOC | Leaderboard" description="Leaderboard of PWoC">
            {/* 🔔 Notification Popup */}
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-6 right-6 bg-white/20 text-white py-3 px-5 rounded-lg shadow-lg backdrop-blur-md border border-gray-400 z-50 sm:top-4 sm:right-4 sm:px-3 sm:py-2"
                    >
                        <p className="text-sm font-medium">🔄 Leaderboard refreshes every 5 minutes.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Leaderboard Content */}
            <div className="font-bold text-[32px] sm:text-[40px] text-[#274495] text-center mb-4">
                {leaderboard.length > 2 ? (
                    <>
                        <TopThree topList={leaderboard.slice(0, 3)} />
                        <LeaderboardTable leaderboard={leaderboard} />
                    </>
                ) : leaderboard.length > 0 ? (
                    <LeaderboardTable leaderboard={leaderboard} />
                ) : (
                    <div className="flex flex-col items-center my-[30px]">
                        {isClient && <Lottie animationData={snowman} loop className="h-[300px] w-auto my-[30px] sm:h-[200px]" />}
                        <div className="font-bold text-[30px] animate-pulse text-center sm:text-[20px]">Loading, please wait...</div>
                    </div>
                )}
                {/* Hold Your Breath… The Results Are Almost In! */}
            </div>
        </PageLayout>
    );
};

export default Leaderboard;