import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillApple } from "react-icons/ai";

function Timeline() {
    return (
        <VerticalTimeline lineColor="#454545">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#000",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Oct 2022 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff"}}
                icon={<AiFillApple />}
            >
                <h3 className="vertical-timeline-element-title">
                    Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam minus harum cum. Accusantium voluptates culpa illo
                    earum quo inventore sapiente?
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#000",
                    borderRadius: "22px"
                    
                }}
                contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Oct 2022 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AiFillApple />}
            >
                <h3 className="vertical-timeline-element-title">
                    Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam minus harum cum. Accusantium voluptates culpa illo
                    earum quo inventore sapiente?
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#000",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Oct 2022 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AiFillApple />}
            >
                <h3 className="vertical-timeline-element-title">
                    Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam minus harum cum. Accusantium voluptates culpa illo
                    earum quo inventore sapiente?
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#000",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Oct 2022 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<AiFillApple />}
            >
                <h3 className="vertical-timeline-element-title">
                    Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam minus harum cum. Accusantium voluptates culpa illo
                    earum quo inventore sapiente?
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Timeline;
