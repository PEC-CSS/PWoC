import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillApple } from "react-icons/ai";

const events = [
    {
        title: "Registration",
        subtitle: "fill the form plaj",
        date: "1 December",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Registration",
        subtitle: "fill the form plaj",
        date: "1 December",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Registration",
        subtitle: "fill the form plaj",
        date: "1 December",
        description: "The time has come to register for pwoc, lfg bois"
    },
    {
        title: "Registration",
        subtitle: "fill the form plaj",
        date: "1 December",
        description: "The time has come to register for pwoc, lfg bois"
    }
]

function Timeline() {
    return (
        <VerticalTimeline lineColor="#454545">
            {
                events.map((event, i)=> {
                    return (
                        <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgb(33, 150, 243)",
                                color: "#000",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  rgb(33, 150, 243)",
                            }}
                            date={event.date}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff"}}
                            icon={<AiFillApple />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {event.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {event.subtitle}
                            </h4>
                            <p>
                                {event.description}
                            </p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    );
}

export default Timeline;
