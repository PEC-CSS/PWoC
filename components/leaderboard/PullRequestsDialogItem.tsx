import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { PullRequest } from "../../typings/types";
import {GitHub} from "@mui/icons-material";
import {FiGitPullRequest} from "react-icons/fi";

const ExpandMore = styled((props) => {
    // @ts-ignore
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    // @ts-ignore
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const PullRequestsDialogItem = ({ pr }: { pr: PullRequest }) => {
    const [expanded, setExpanded] = useState(false);
    const [repoName, setRepoName] = useState("");

    const handleExpandClick = () => {
        setExpanded(!expanded);
        if (expanded) getRepoName(pr.repository_url || "");
    };

    useEffect(() => {
        getRepoName(pr.repository_url || "");
    });

    const getRepoName = (url: String) => {
        const arr = url.split("/");
        setRepoName(arr[arr.length - 1]);
    };

    let labels = pr.labels.map((label) => label.name.trim().toLowerCase())
    let background = labels.includes("easy") ? "rgba(52,255,0,0.3)" :
        labels.includes("medium") ? "rgba(255,128,0,0.3)" :
            labels.includes("hard") ? "rgba(255,0,0,0.3)" : "rgba(94,91,91,0.3)"

    return (
        <Card
            sx={{
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
                margin: "10px 0",
                backgroundColor: background,
                backdropFilter: "blur( 8px )",
                color: "white"
            }}
        >
            <CardHeader
                title={pr.title}
                titleTypographyProps={{
                    fontSize: 20,
                    fontFamily: "hammersmith",
                }}
                action={
                    // @ts-ignore
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon className="text-white" />
                    </ExpandMore>
                }
            >
                <Typography
                    sx={{
                        color: "black",
                        fontFamily: "monospace",
                        fontSize: 16,
                    }}
                >
                    {repoName}
                </Typography>
            </CardHeader>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="flex flex-row items-center justify-between flex-wrap">
                    <div>
                        Project: <b>{repoName}</b>
                        <a
                            href={pr.repository_url?.replace("api.github.com/repos", "github.com")}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-1"
                        >
                            <GitHub />
                        </a>
                    </div>

                    <a
                        href={pr.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex glassmorphism p-2 duration-500 hover:bg-black"
                        >
                            Go to PR <FiGitPullRequest className="ml-1" />
                    </a>
                </CardContent>
            </Collapse>
        </Card>
    );
};