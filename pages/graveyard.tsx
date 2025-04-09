import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageLayout from "../components/layout/PageLayout";
import { TopThree } from "../components/leaderboard/TopThree";
import { LeaderboardTable } from "../components/leaderboard/LeaderboardTable";
import { Item } from "../typings/types";
import tombstone from "../public/assets/animations/tombstone.json";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function Graveyard() {
    const [leaderboard, setLeaderboard] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isClient, setIsClient] = useState(false);
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [showSecondNotification, setShowSecondNotification] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);

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

        // Initial fetch
        fetchGraveyardData();

        // Show notification on page load
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            // Show the second notification after the first disappears
            setTimeout(() => {
                setShowSecondNotification(true);
                setTimeout(() => {
                    setShowSecondNotification(false);
                }, 4000); // Hide second notification after 4 seconds
            }, 1000); // Delay second notification by 1 second
        }, 4000); // Hide first notification after 4 seconds

        // Refresh leaderboard every 5 minutes and show notifications
        const interval = setInterval(() => {
            fetchGraveyardData();
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                setTimeout(() => {
                    setShowSecondNotification(true);
                    setTimeout(() => {
                        setShowSecondNotification(false);
                    }, 4000); // Hide second notification after 4 seconds
                }, 1000); // Delay second notification by 1 second
            }, 4000); // Hide first notification after 4 seconds
        }, 5 * 60 * 1000); // 5 minutes

        return () => clearInterval(interval);
    }, []);

    return (
        <PageLayout title="PWOC | Graveyard" description="A place to bury programming mistakes">
            {/* 🔔 Notification Popups */}
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-6 right-6 bg-white/20 text-white py-3 px-5 rounded-lg shadow-lg backdrop-blur-md border border-gray-400 z-50"
                    >
                        <p className="text-sm font-medium">🔄 Leaderboard refreshes every 5 minutes.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSecondNotification && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-6 right-6 bg-white/20 text-white py-3 px-5 rounded-lg shadow-lg backdrop-blur-md border border-gray-400 z-50"
                    >
                        <p className="text-sm font-medium">Graveyard is for 1st Year PEC Students Only.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col items-center my-[30px] w-full px-4">
                {/* Title Section */}
                <div className="font-bold text-[32px] sm:text-[40px] text-[#274495] text-center mb-4">
                    Graveyard
                </div>
                <div className="text-[#274495] font-semibold text-center mb-6">
                    Because every programmer needs a place to bury their mistakes and learn from them
                </div>
                {/* <div className="font-bold text-[32px] sm:text-[40px] text-[#274495] text-center mb-4">Hold Your Breath… The Results Are Almost In!</div> */}
                {/* Main Content */}
                <div className="flex items-center flex-col w-full my-[20px]">
                    {leaderboard.length > 0 ? (
                        <>
                            {/* Top Three */}
                            <TopThree topList={leaderboard.slice(0, 3)} />
                            <LeaderboardTable leaderboard={leaderboard} />
                        </>
                    ) : (
                        <div className="flex flex-col items-center my-[30px]">
                            {/* Lottie Animation */}
                            {isClient && (
                                <Lottie animationData={tombstone} loop className="h-[250px] sm:h-[300px] w-auto my-[30px]" />
                            )}
                            {/* Loading Text */}
                            <div className="font-bold text-[24px] sm:text-[30px] animate-pulse text-[#274495]">
                                Loading, please wait..
                            </div>
                        </div>
                    )
                    }
                </div>
        
            </div>
        </PageLayout>
    );
}

export default Graveyard;
