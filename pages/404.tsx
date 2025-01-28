import { NextPage } from "next";
import dynamic from "next/dynamic";
import PageLayout from "../components/layout/PageLayout";
import notfound from "../public/assets/animations/notfound.json";
import React, { useEffect, useState } from "react";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ErrorPage: NextPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <PageLayout title="404 | Not Found">
            <div className="flex flex-col items-center mb-[20px]">
                {isClient && (
                    <Lottie
                        animationData={notfound}
                        loop
                        className="h-[300px] w-auto md:h-[500px]"
                    />
                )}
                <div className="text-[30px] font-bold md:text-[50px]">
                    This page does not exist :(
                </div>
            </div>
        </PageLayout>
    );
};

export default ErrorPage;