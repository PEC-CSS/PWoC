import {Item} from "../../public/types";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Image from "next/image";

export const LeaderboardTable = ({leaderboard}: {leaderboard: Item[]}) => {
    return (
        <TableContainer>
            <Table className="m-[20px]">
                <TableHead>
                    <TableRow>
                        <TableCell component="th">Rank</TableCell>
                        <TableCell component="th">Contributor</TableCell>
                        <TableCell component="th">Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        leaderboard.map((item: Item,i: number)=> {
                            return (
                                <TableRow key={i}>
                                    <TableCell align="left">{i + 1}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-row items-center">
                                            <Image
                                                src={item.user.avatar_url}
                                                alt=""
                                                height="60"
                                                width="60"
                                                className="rounded-[50%]"/>
                                            <div>
                                                <div>{item.user.name}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">{item.points}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}