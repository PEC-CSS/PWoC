import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {PullRequest} from "../../public/types";


const ExpandMore = styled((props) => {
    // @ts-ignore
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    // @ts-ignore
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const PullRequestsDialogItem = ({ pr }: { pr: PullRequest }) => {
    console.log(pr);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ boxShadow: '0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)', margin: '10px 0' }}>
            <CardHeader
                title={pr.title}
                action={
                // @ts-ignore
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                }
            />
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Button variant='outlined'>
                        <a
                            href={pr.html_url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            PR URL
                        </a>
                    </Button>
                </CardContent>
            </Collapse>
        </Card>
    );
};