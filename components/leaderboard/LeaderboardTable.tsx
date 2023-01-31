import {Item} from "../../typings/types";
import {SxProps, Table, TableBody, TableCell, TableHead, TableRow, Theme} from "@mui/material";
import {LeaderboardItem} from "./LeaderboardItem";

export const LeaderboardTable = ({leaderboard}: {leaderboard: Item[]}) => {

    let tableHeaderStyle: SxProps<Theme> = {
        fontWeight: "bold",
        fontSize: "25px",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur( 8px )",
    }

    return (
        <Table
            sx={{
                padding: "10px 50px",
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
                    <TableCell component="th" sx={tableHeaderStyle} style={{width: "10%"}} align="center">Rank</TableCell>
                    <TableCell component="th" sx={tableHeaderStyle} style={{width: "70%"}}>Contributor</TableCell>
                    <TableCell component="th" sx={tableHeaderStyle} style={{width: "10%"}} align="center">PRs</TableCell>
                    <TableCell component="th" sx={tableHeaderStyle} style={{width: "10%"}} align="center">Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody sx={{
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                backgroundColor: "rgba(73,73,73,0.7)",
                backdropFilter: "blur( 8px )",
                boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.18 );",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}>
                {
                    leaderboard.map((item: Item,i: number)=> {
                        return (
                            <LeaderboardItem item={item} i={i} key={i} />
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}