import {Item} from "../../public/types";
import {SxProps, Table, TableBody, TableCell, TableHead, TableRow, Theme} from "@mui/material";
import {LeaderboardItem} from "./LeaderboardItem";

export const LeaderboardTable = ({leaderboard}: {leaderboard: Item[]}) => {

    let tableHeaderStyle: SxProps<Theme> = {
        fontWeight: "bold",
        fontSize: "25px",
        color: "white",
        backgroundColor: "black"
    }

    return (
        <Table
            sx={{
                padding: "10px 20px",
                borderCollapse: "separate"
            }}
        >
            <TableHead sx={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                overflow: "hidden"
            }}>
                <TableRow>
                    <TableCell component="th" sx={tableHeaderStyle}>Rank</TableCell>
                    <TableCell component="th" colSpan={100} sx={tableHeaderStyle}>Contributor</TableCell>
                    <TableCell component="th" sx={tableHeaderStyle}>PRs</TableCell>
                    <TableCell component="th" sx={tableHeaderStyle} align="center">Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px"
            }}>
                {
                    leaderboard.map((item: Item,i: number)=> {
                        console.log(i)
                        return (
                            <LeaderboardItem item={item} i={i} key={i} />
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}