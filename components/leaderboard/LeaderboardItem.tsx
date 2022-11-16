import {TableCell, TableRow} from "@mui/material";
import Image from "next/image";
import {Item} from "../../public/types";
import {PullRequestsDialog} from "./PullRequestsDialog";
import {useState} from "react";

export const LeaderboardItem = ({item, i}: {item: Item, i: number}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell colSpan={100}>
                    <a className="flex flex-row items-center" href={item.user.html_url} target="_blank" rel="noreferrer">
                        <Image
                            src={item.user.avatar_url}
                            alt=""
                            height="50"
                            width="50"
                            className="rounded-[50%]"/>
                        <div className="flex mx-[10px] flex-col">
                            <div className="font-bold text-[20px]">{item.user.name}</div>
                            <div>{item.user.username}</div>
                        </div>
                    </a>
                </TableCell>
                <TableCell
                    sx={{
                        cursor: "pointer"
                    }}
                    onClick={()=> setOpen(true)}>
                    {item.pullRequests.length}
                </TableCell>
                <TableCell align="center">{item.points}</TableCell>
            </TableRow>
            <PullRequestsDialog
                pullRequests={item.pullRequests}
                open={open}
                onClose={()=> setOpen(false)}
            />
        </>
    )
}