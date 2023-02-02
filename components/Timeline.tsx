import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {AiOutlineForm} from "react-icons/ai";
import {Handshake, LaptopMac, Lock} from "@mui/icons-material";
import {MdChecklist} from "react-icons/md";
import {GiFinishLine} from "react-icons/gi";
import {BiTrophy} from "react-icons/bi";

const events = [
    {
        title: "Registrations Open",
        date: "9 January 2023",
        description: "Registrations begin for mentors and mentees",
        icon: <AiOutlineForm />
    },
    // {
    //     title: "Registrations Close",
    //     date: "24 January 2023",
    //     description: "The registration period ends and final projects are displayed",
    //     icon: <Lock />
    // }, -> they never close hehe
    {
        title: "Community Bonding",
        date: "25 January 2023",
        description: "Time to know each other before the coding begins :)",
        icon: <Handshake />
    },
    {
        title: "Coding Period Begins",
        date: "26 January 2023",
        description: "The program is kicked off, mentees begin contributing to the listed projects",
        icon: <LaptopMac />
    },
    {
        title: "Mid-Evaluation",
        date: "20 February 2023",
        description: "Half time's up! The performance of mentees is evaluated",
        icon: <MdChecklist />
    },
    {
        title: "Coding Period ends",
        date: "15 March 2023",
        description: "The contributing period comes to an end, no more pull requests will be made after this",
        icon: <GiFinishLine />
    },
    {
        title: "Final Results Announced",
        date: "20 March 2023",
        description: "The final leaderboard is released after all pending pull requests are merged. Time to congratulate the winners!",
        icon: <BiTrophy />
    }
]

function Timeline() {
    return (
        <div>
            <VerticalTimeline lineColor="#454545">
                {
                    events.map((event, i)=> {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "rgba(255, 255, 255, 0.3)",
                                    backdropFilter: "blur( 8px )",
                                    boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.18 );",
                                    borderRadius: "10px",
                                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                                    position: "relative",
                                    zIndex: "0"
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={event.date}
                                dateClassName="text-white"
                                iconStyle={{
                                    background: "rgb(2,36,61,0.3)",
                                    color: "#fff",
                                    backdropFilter: "blur(8px)"
                                }}
                                icon={event.icon}
                            >
                                <h3 className="vertical-timeline-element-title font-bold text-[20px] underline decoration-gray-400 decoration-4 break-words">
                                    {event.title}
                                </h3>
                                <p className="font-extralight">
                                    {event.description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;