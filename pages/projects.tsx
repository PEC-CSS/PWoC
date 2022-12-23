import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Search } from '../components/projects/Search';
import { SearchResults } from '../components/projects/SearchResults';
import { getProjects } from "../public/spreadsheet";
import { Project } from "../public/types";
import Lottie from "react-lottie-player";
import loading from '../public/assets/animations/loading.json';
import notfound from '../public/assets/animations/notfound.json';

const Projects: NextPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [projects, setProjects] = useState<Project[]>()
	const [projectSearchResults, setProjectSearchResults] = useState<Project[]>([]);

	useEffect(() => {
		getProjects()
			.then(projs => {
				setProjects(projs)
				setProjectSearchResults(projs)
			})
			.catch(error => console.error(error))
	}, [])

	const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!projects)
			return

		if (!searchTerm.trim().length) {
			setProjectSearchResults(projects);
		} else {
			const searchResults = projects.filter((project) => {
				return (
					project.title
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					project.description
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					project.techStack.find((tS) =>
						tS.toLowerCase().includes(searchTerm.toLowerCase())
					)
				);
			});
			setProjectSearchResults(searchResults);
		}
	};

	return (
		<PageLayout title="Projects">
			<div>
				<div className='relative z-[-1]'>
					<Search
						onSearch={onSearch}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					{
						!projects ? (
							<Lottie
								play
								loop
								animationData={loading}
								className="h-[200px] w-auto"
							/>
						) : projectSearchResults.length > 0 ? (
							<SearchResults projects={projectSearchResults} />
						) : (
							<div className="flex flex-col items-center mb-[20px]">
								<Lottie
									play
									loop
									animationData={notfound}
									className="h-[300px] w-auto md:h-[250px]"
								/>
								<div className="text-[30px] font-bold md:text-[20px]">No results found :(</div>
							</div>
						)
					}
				</div>
			</div>
		</PageLayout>
	);
};

export default Projects;
