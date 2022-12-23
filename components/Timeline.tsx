import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillApple } from "react-icons/ai";

const events = [
    {
        title: "Registrations Open",
        subtitle: "for mentors and contributors",
        date: "25 December 2022",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Registrations Close",
        subtitle: "fill the form plaj",
        date: "14 January 2023",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Community Bonding",
        subtitle: "fill the form plaj",
        date: "15 January 2023",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Coding Period Begins",
        subtitle: "fill the form plaj",
        date: "16 January 2023",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Mid-Evaluation",
        subtitle: "fill the form plaj",
        date: "7 February 2023",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Coding Period ends",
        subtitle: "fill the form plaj",
        date: "28 February 2023",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Final Results announced",
        subtitle: "fill the form plaj",
        date: "14 March 2023",
        description: "The time has come to register for pwoc, lfg bois"
    }
]

function Timeline() {
    return (
        <div className="z-0 relative">
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
                                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff"}}
                                icon={<AiFillApple />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {event.title}
                                </h3>
                                <p>
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
