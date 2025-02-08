import { Item } from "../../typings/types";
import { SxProps, Table, TableBody, TableCell, TableHead, TableRow, Theme, Box } from "@mui/material";
import { LeaderboardItem } from "./LeaderboardItem";

export const LeaderboardTable = ({ leaderboard }: { leaderboard: Item[] }) => {

    const tableHeaderStyle: SxProps<Theme> = {
        fontWeight: "bold",
        fontSize: { xs: "18px", sm: "25px" }, // Adjust font size for small screens
        color: "white",
        backgroundColor: "rgba(32,38,87,0.40)",
        backdropFilter: "blur(8px)",
        fontFamily: "Hammersmith, sans-serif"
    }

    return (
        <Box sx={{ overflowX: "auto", width: "100%" }}> {/* Enables horizontal scrolling */}
            <Table
                sx={{
                    width: "100%",
                    borderCollapse: "separate",
                    tableLayout: "auto", // Adjust layout for responsiveness
                    borderSpacing: "0 8px", // Add some space between rows for better appearance
                }}
            >
                <TableHead sx={{
                    boxShadow: "glassmorphism bg-[rgba(32,38,87,0.89)] 0px 3px 6px, glassmorphism bg-[rgba(32,38,87,0.89)] 0px 3px 6px",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    overflow: "hidden"
                }}>
                    <TableRow>
                        <TableCell component="th" sx={tableHeaderStyle} style={{ width: "10%" }} align="center">Rank</TableCell>
                        <TableCell component="th" sx={tableHeaderStyle} style={{ width: "70%" }}>Contributor</TableCell>
                        <TableCell component="th" sx={tableHeaderStyle} style={{ width: "10%" }} align="center">PRs</TableCell>
                        <TableCell component="th" sx={tableHeaderStyle} style={{ width: "10%" }} align="center">Points</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody sx={{
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    backgroundColor: "rgba(32,38,87,0.30)",
                    backdropFilter: "blur( 8px )",
                    boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.18 );",
                    borderRadius: "10px",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                }}>
                    {
                        leaderboard.map((item: Item, i: number) => {
                            return (
                                <LeaderboardItem item={item} i={i} key={i} />
                            )
                        })
                    }
                </TableBody>
            </Table>
        </Box>
    )
}
