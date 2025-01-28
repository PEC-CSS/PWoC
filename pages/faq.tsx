import { NextPage } from "next";
import React from "react";
import { BottomBar } from "../components/faqs/bottomBar";
import { Card } from "../components/faqs/cards";
import { TopBar } from "../components/faqs/topBar";
import PageLayout from "../components/layout/PageLayout";
import { CheckSharp, Person2 } from "@mui/icons-material";
import { BiLaptop, BiMedal } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { FiGitPullRequest } from "react-icons/fi";
import { Faq as FaqType } from "../typings/types"; // Renamed the type to avoid conflict

const faqData: FaqType[] = [
    {
        icon: <Person2 />,
        title: "I am just a beginner, can I participate?",
        description:
            "Yes, that's exactly the reason you should participate as the program will provide you the experience of open source contribution and assist you in improving your development skills.",
    },
    {
        icon: <CheckSharp />,
        title: "What is the criteria for selection?",
        description:
            "There's no criteria for selection as we wish to provide everyone an opportunity to learn and grow through this program. You just need to fill the registration form.",
    },
    {
        icon: <BiLaptop />,
        title: "How many projects can I contribute to?",
        description:
            "There's no restriction on the number of projects you can contribute to. You can contribute to any project at any time.",
    },
    {
        icon: <GiTeacher />,
        title: "How can I contact a project's mentor?",
        description:
            "All communications will be carried out through our discord server. There will be channels created for each of the listed projects.",
    },
    {
        icon: <FiGitPullRequest />,
        title: "How does this whole thing work?",
        description:
            "Mentors will be responsible for creating issues, which will then be assigned on FCFS basis. After a pull request is merged, points will be awarded based on the difficulty assigned by the mentor.",
    },
    {
        icon: <BiMedal />,
        title: "Will there be any rewards?",
        description:
            "Participation certificates will be given to all contributors and the top contributors will be awarded with some special rewards :)",
    },
];

const FAQPage: NextPage = () => { // Changed component name to avoid conflict
    return (
        <PageLayout title="PWOC | FAQ" description="Rules and prizes plus some general queries.">
            <div className="container mx-auto flex flex-col gap-[50px] sm:gap-[55px] md:gap-[60px] lg:gap-[70px] xl:gap-[75px] py-[30px] sm:py-[35px] md:py-[40px] lg:py-[45px] xl:py-[50px] px-[15px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[75px]">
                <TopBar />
                <div className="cards flex flex-col sm:flex-row flex-wrap justify-center gap-y-[35px] sm:gap-y-[40px] md:gap-y-[45px] lg:gap-y-[50px] gap-x-[35px]">
                    {faqData.map((faq, i) => (
                        <Card faq={faq} key={`faq-${i}`} />
                    ))}
                </div>
                <BottomBar />
            </div>
        </PageLayout>
    );
};

export default FAQPage;