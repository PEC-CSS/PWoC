import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Search } from '../components/projects/Search';
import { SearchResults } from '../components/projects/SearchResults';
import { Project } from '../typings/types';
import Lottie from 'react-lottie-player';
import loading from '../public/assets/animations/loading.json';
import notfound from '../public/assets/animations/notfound.json';

const Projects: NextPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [projects, setProjects] = useState<Project[]>();
	const [projectSearchResults, setProjectSearchResults] = useState<Project[]>(
		[]
	);

	// Fetch projects data from the server
	const getProjects = async () => {
		try {
			const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
			const projectsURL = `${baseURL}/projects`;
			const response = await fetch(projectsURL);
			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
			const data = await response.json();
			setProjects(data);
			setProjectSearchResults(data)
		} catch (error) {
			console.error('Failed to fetch leaderboard:', error);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!projects) return;

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
		<PageLayout
			title='PWOC | Projects'
			description='List of the available projects in PWoC. Choose and contribute.'
		>
			<div>
				<div className=''>
					<Search
						onSearch={onSearch}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					{!projects ? (
						<Lottie
							play
							loop
							animationData={loading}
							className='h-[200px] w-auto'
						/>
					) : projectSearchResults.length > 0 ? (
						<SearchResults projects={projectSearchResults} />
					) : (
						<div className='flex flex-col items-center mb-[20px]'>
							<Lottie
								play
								loop
								animationData={notfound}
								className='h-[300px] w-auto md:h-[250px]'
							/>
							<div className='text-[30px] font-bold md:text-[20px]'>
								No results found :(
							</div>
						</div>
					)}
				</div>
			</div>
		</PageLayout>
	);
};

export default Projects;
