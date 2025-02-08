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
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                style: {
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    background: "rgba(0, 0, 0, 0.3)"
                }
            }}
        >
            <DialogTitle>
                <div className="text-2xl text-white font-hammersmith">Pull Requests</div>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: "#FFFFFF"
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {pullRequests.map((pr: PullRequest, i: number) => {
                    return <PullRequestsDialogItem pr={pr} key={i} />;
                })}
            </DialogContent>
        </Dialog>
    );
};