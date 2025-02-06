import type { NextApiRequest, NextApiResponse } from "next"
export interface Project {
    id: number
    title: string
    description: string
    techStack: string[]
  }
  

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  const projects: Project[] = [
    {
      id: 1,
      title: "Winter Weather App",
      description: "Create a weather application with a winter theme, showing snow forecasts and winter activities.",
      techStack: ["React", "Node.js", "Weather API"],
    },
    {
      id: 2,
      title: "Snowflake Generator",
      description: "Develop an algorithm to generate unique, symmetrical snowflake patterns.",
      techStack: ["JavaScript", "Canvas API", "Algorithms"],
    },
    {
      id: 3,
      title: "Ski Resort Booking System",
      description: "Build a booking system for a fictional ski resort, managing reservations and equipment rentals.",
      techStack: ["Vue.js", "Express", "MongoDB"],
    },
    {
      id: 4,
      title: "Winter Wildlife Tracker",
      description: "Create a mobile app for tracking and identifying winter wildlife sightings.",
      techStack: ["React Native", "Firebase", "Machine Learning"],
    },
    {
      id: 5,
      title: "Avalanche Risk Assessment Tool",
      description: "Develop a tool to assess avalanche risks based on weather data and terrain information.",
      techStack: ["Python", "Data Science", "GIS"],
    },
  ]

  res.status(200).json(projects)
}

