import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material";
import { PullRequest } from "../../typings/types";
import { PullRequestsDialogItem } from "./PullRequestsDialogItem";
import CloseIcon from "@mui/icons-material/Close";

type PrDialogItem = {
    pullRequests: PullRequest[];
    open: boolean;
    onClose: () => void;
};

export const PullRequestsDialog = ({
    pullRequests,
    open,
    onClose,
}: PrDialogItem) => {
    return (
        <Dialog open={open} onClose={onClose} className="glassmorphism">
            <DialogTitle>
                <Typography sx={{fontFamily: 'hammersmith', fontSize: 24}}>Pull Requests </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "#000000",
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {pullRequests.map((pr: PullRequest, i: number) => {
                    // return <div key={i}>{pr.title}</div>;
                    return <PullRequestsDialogItem pr={pr} key={i} />;
                })}
            </DialogContent>
        </Dialog>
    );
};
