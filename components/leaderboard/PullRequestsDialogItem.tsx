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
        if (expanded) getRepoName(pr.repository_url);
    };

    useEffect(() => {
        getRepoName(pr.repository_url);
    });

    const getRepoName = (url: String) => {
        console.log(url);
        const arr = url.split("/");
        console.log(arr);
        setRepoName(arr[arr.length - 1].toUpperCase());
    };

    return (
        <Card
            sx={{
                boxShadow:
                    "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
                margin: "10px 0",
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
                        <ExpandMoreIcon />
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
            <CardContent sx={{ m: 0, display: 'flex' }} className="space-x-4">
                <Typography
                    sx={{
                        color: "black",
                        fontFamily: "monospace",
                        fontSize: 16,
                    }}
                >
                    {repoName}
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Button variant="outlined">
                        <a
                            href={pr.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PR URL
                        </a>
                    </Button>
                </CardContent>
            </Collapse>
        </Card>
    );
};
