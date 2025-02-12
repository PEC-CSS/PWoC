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


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!projects) return;
    
        const filteredProjects = projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.techStack.some(stack => stack.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    
        setProjectSearchResults(filteredProjects);
    };

    return (
        <PageLayout title="PWOC | Projects" description="List of projects in PWoC">
            <div>
                <Search onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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


