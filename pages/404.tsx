import {NextPage} from "next";
import PageLayout from "../components/layout/PageLayout";
//mport Lottie from "react-lottie-player";
import notfound from "../public/assets/animations/notfound.json";
import React from "react";

const ErrorPage: NextPage = () => {
    return (
        <PageLayout title="404 | Not Found">
            <div className="flex flex-col items-center mb-[20px]">
                {/* <Lottie
                    play
                    loop
                    animationData={notfound}
                    className="h-[300px] w-auto md:h-[500px]"
                /> */}
                <div className="text-[30px] font-bold md:text-[2=50px]">This page does not exist :(</div>
            </div>
        </PageLayout>
    )
}

export default ErrorPage;