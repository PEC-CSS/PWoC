import {NextPage} from "next";
import {Octokit} from "@octokit/rest";
import {contributors, repositories} from "../public/data";
import {useEffect, useState} from "react";
import {Item, PullRequest} from "../public/types";
import {Table, TableContainer, TableHead} from "@mui/material";
import {LeaderboardTable} from "../components/leaderboard/LeaderboardTable";

const Leaderboard: NextPage = ()=> {

    const [leaderboard, setLeaderboard] = useState<Item[]>([])

    const getPullRequests = async ()=> {
        let octokit = new Octokit({ auth: process.env.ACCESS_TOKEN})
        let repoRequests = repositories.map((repo: string)=> {
            let query = `type:pr+repo:${repo}`
            contributors.forEach((username: string)=> {
                query += `+author:${username}`
            })
            return octokit.rest.search.issuesAndPullRequests({
                q: query,
                per_page: 100
            }).then(res=> res.data.items)
        })
        let repoResponses = await Promise.all(repoRequests) as PullRequest[][]
        let pullRequestMap = new Map<string,PullRequest[]>()
        contributors.forEach((username: string)=> {
            pullRequestMap.set(username, [])
        })
        repoResponses.forEach((pullRequests: PullRequest[])=> {
            pullRequests.forEach((pullRequest: PullRequest)=> {
                pullRequestMap.get(pullRequest.user.login)?.push(pullRequest)
            })
        })
        let leaderboard: Item[] = []
        pullRequestMap.forEach((pullRequests: PullRequest[], username: string)=> {
            if(pullRequests.length === 0)
                return
            leaderboard.push({
                user: {
                    username: username,
                    avatar_url: pullRequests[0].user.avatar_url,
                    html_url: pullRequests[0].user.html_url
                },
                pullRequests: pullRequests,
                points: pullRequests.length
            })
        })
        leaderboard.sort((item1: Item, item2: Item)=> {
            return item2.points - item1.points
        })
        console.log(leaderboard)
        return leaderboard
    }
    useEffect(()=> {
        getPullRequests()
            .then(itemList=> setLeaderboard(itemList))
            .catch(error=> console.error(error))
    }, [])
    return (
        <div className="flex items-center flex-col">
            <div className="font-bold text-2xl">Leaderboard</div>
            <LeaderboardTable leaderboard={leaderboard} />
        </div>
    )
}

export default Leaderboard;