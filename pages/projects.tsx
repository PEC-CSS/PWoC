// import type { NextPage } from "next"
// import type React from "react"
// import { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import PageLayout from "../components/layout/PageLayout"
// import {Search} from "../components/projects/Search"
// import {SearchResults} from "../components/projects/SearchResults"
// import LoadingAnimation from "../components/LoadingAnimation"
// // import NotFound from "../components/projects/NotFound"

// export type Project = {
//     title: string,
//     techStack: string[],
//     description: string,
//     githubLink: string,
//     deploymentLink: string,
//     mentor: string,
//     mentorGithubLink: string,
//     mentorLinkedinLink: string,
//     mentorEmail: string,
//     mentorMobileNumber: number,
//     mentorDiscordUsername: string
// }

// const Projects: NextPage = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [projects, setProjects] = useState<Project[]>([])
//   const [projectSearchResults, setProjectSearchResults] = useState<Project[]>([])
//   const [loading, setLoading] = useState(true)

//   const getProjects = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch("/api/projects")
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`)
//       }
//       const data = await response.json()
//       setProjects(data)
//       setProjectSearchResults(data)
//     } catch (error) {
//       console.error("Failed to fetch projects:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     getProjects()
//   }, []) //Fixed useEffect dependency issue

//   const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!projects.length) return

//     if (!searchTerm.trim().length) {
//       setProjectSearchResults(projects)
//     } else {
//       const searchResults = projects.filter((project) => {
//         return (
//           project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           project.techStack.some((tech)  => tech.toLowerCase().includes(searchTerm.toLowerCase()))
//         )
//       })
//       setProjectSearchResults(searchResults)
//     }
//   }

//   return (
//     <PageLayout
//       title="Winter of Code | Projects"
//       description="Explore and contribute to exciting coding projects in our Winter of Code event."
//     >
//       <div className="min-h-screen bg-gradient-to-b from-[#0B4F6C]/10 to-transparent py-20">
//         <div className="container mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-bold text-center text-[#0B4F6C] mb-12"
//           >
//             Winter of Code Projects
//           </motion.h1>

//           <Search onSearch={onSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

//           {loading ? (
//             <LoadingAnimation />
//           ) : projectSearchResults.length > 0 ? (
//             <SearchResults projects={projectSearchResults} />
//           ) : (
//             // <NotFound />
//             <div>hi</div>
//           )}
//         </div>
//       </div>
//     </PageLayout>
//   )
// }

// export default Projects


import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageLayout from "../components/layout/PageLayout";
import { Search } from "../components/projects/Search";
import { SearchResults } from "../components/projects/SearchResults";
import { Project } from "../typings/types";
import loading from "../public/assets/animations/loading.json";
import notfound from "../public/assets/animations/notfound.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Projects: NextPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [projects, setProjects] = useState<Project[]>();
    const [projectSearchResults, setProjectSearchResults] = useState<Project[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const getProjects = async () => {
            try {
                const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
                const response = await fetch(`${baseURL}/projects`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setProjects(data);
                setProjectSearchResults(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };
        getProjects();
    }, []);

    return (
        <PageLayout title="PWOC | Projects" description="List of projects in PWoC">
            <div>
                <Search onSearch={(e) => { e.preventDefault(); }} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                {!projects ? (
                    isClient && <Lottie animationData={loading} loop className="h-[200px] w-auto" />
                ) : projectSearchResults.length > 0 ? (
                    <SearchResults projects={projectSearchResults} />
                ) : (
                    <div className="flex flex-col items-center mb-[20px]">
                        {isClient && <Lottie animationData={notfound} loop className="h-[300px] w-auto" />}
                        <div className="text-[30px] font-bold">No results found :(</div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default Projects;