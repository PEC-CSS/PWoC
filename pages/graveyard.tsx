import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '../components/layout/PageLayout';
import { TopThree } from "../components/leaderboard/TopThree";
import { LeaderboardTable } from "../components/leaderboard/LeaderboardTable";
import { Item } from "../typings/types";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });
import tombstone from "../public/assets/animations/tombstone.json";

function Graveyard() {
  const [leaderboard, setLeaderboard] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGraveyardData = useCallback(async () => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseURL) {
      setError("API base URL is not defined.");
      setLoading(false);
      return;
    }

    try {
      const graveyardURL = `${baseURL}/graveyard`;
      const response = await fetch(graveyardURL);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error('Failed to fetch graveyard data:', error);
      setError("Failed to load graveyard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGraveyardData();
    return () => {
      setLeaderboard([]); // Cleanup to prevent memory leaks
    };
  }, [fetchGraveyardData]);

  return (
    <PageLayout
      title="PWOC | Graveyard"
      description="Because every programmer needs a place to bury their mistakes and learn from them"
    >
      <div className="flex flex-col items-center my-[30px] w-full">
        <div className="font-bold text-[40px]">Graveyard</div>
        <div>Because every programmer needs a place to bury their mistakes and learn from them</div>

        <div className="flex items-center flex-col w-full my-[20px]">
          {loading ? (
            <div className="flex flex-col items-center my-[30px]">
              <Lottie play loop animationData={tombstone} className="h-[300px] w-auto my-[30px]" />
              <div className="font-bold text-[30px] animate-pulse">Loading, please wait..</div>
            </div>
          ) : error ? (
            <div className="text-red-500 font-semibold">{error}</div>
          ) : leaderboard.length > 0 ? (
            <>
              <TopThree topList={leaderboard.slice(0, 3)} />
              <LeaderboardTable leaderboard={leaderboard} />
            </>
          ) : (
            <div className="text-gray-500 font-semibold">No data available.</div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Graveyard;