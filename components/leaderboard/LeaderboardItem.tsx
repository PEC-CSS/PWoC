import {TableCell, TableRow} from "@mui/material";
import Image from "next/image";
import {Item} from "../../typings/types";
import {PullRequestsDialog} from "./PullRequestsDialog";
import {useState} from "react";
import {AiFillTrophy} from "react-icons/ai";

export const LeaderboardItem = ({item, i}: {item: Item, i: number}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow key={i} sx={{width: "100%"}}>
                <TableCell
                    align="center"
                    sx={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: i == 0 ? "gold" : i == 1 ? "silver" : i == 2 ? "brown" : "white",
                        fontFamily: "Hammersmith, sans-serif"
                    }}
                >
                    <div className="flex flex-row items-center justify-center">
                        {
                            i < 3 && (
                                <AiFillTrophy />
                            )
                        }
                        <span>{i + 1}</span>
                    </div>
                </TableCell>
                <TableCell sx={{fontFamily: "Hammersmith, sans-serif"}}>
                    <div className="flex flex-row items-center">
                        <Image
                            src={item.user.avatar_url}
                            alt=""
                            height="50"
                            width="50"
                            className="rounded-[50%]"/>
                        <div className="flex mx-[10px] flex-col text-white">
                            <a
                                href={item.user.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold relative text-[20px] before:bottom-0 before:left-0 before:content-[''] before:absolute before:bg-sky-500 before:scale-x-0 before:w-full before:h-[2px] before:origin-right before:transition-transform before:ease-in-out before:duration-500 hover:cursor-pointer hover:before:origin-left hover:before:scale-x-100"
                            >
                                {item.user.name}
                            </a>
                            <div>{item.user.username}</div>
                        </div>
                    </div>
                </TableCell>
                <TableCell
                    align="center"
                    sx={{fontFamily: "Hammersmith, sans-serif"}}
                >
                    <div
                        className={`text-white before:rounded-[10px] before:shadow-md before:shadow-white hover:cursor-pointer pr-button before:content-[attr(before)]`}
                        onClick={()=> setOpen(true)}
                        // @ts-ignore
                        before={item.pullRequests.length}
                    />
                </TableCell>
                <TableCell align="center" sx={{fontSize: "20px", color: "white", fontFamily: "Hammersmith, sans-serif"}}>{item.points}</TableCell>
            </TableRow>
            <PullRequestsDialog
                pullRequests={item.pullRequests}
                open={open}
                onClose={()=> setOpen(false)}
            />
        </>
    )
}