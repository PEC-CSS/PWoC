import type { NextApiRequest, NextApiResponse } from "next"

type Participant = {
  id: number
  name: string
  score: number
  avatar: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Participant[]>) {
  // This is mock data. In a real application, you would fetch this from a database.
  const leaderboard: Participant[] = [
    { id: 1, name: "Alice Winter", score: 1200, avatar: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Bob Frost", score: 1150, avatar: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Charlie Snow", score: 1100, avatar: "/placeholder.svg?height=80&width=80" },
    { id: 4, name: "Diana Ice", score: 1050, avatar: "/placeholder.svg?height=80&width=80" },
    { id: 5, name: "Ethan Blizzard", score: 1000, avatar: "/placeholder.svg?height=80&width=80" },
    // Add more participants as needed
  ]

  res.status(200).json(leaderboard)
}

