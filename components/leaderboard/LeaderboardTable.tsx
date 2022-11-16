import {Item} from "../../public/types";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Image from "next/image";

export const LeaderboardTable = ({leaderboard}: {leaderboard: Item[]}) => {
    return (
        <TableContainer>
            <Table>
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
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell>
                                        {/*<Image src={item.user.avatar_url} alt="" height="50px" width="50px"/>*/}
                                        {/*<div>*/}
                                        {/*    <div>{item.user}</div>*/}
                                        {/*</div>*/}
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}