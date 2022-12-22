import { NextPage } from 'next';
import React, {useEffect, useState} from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Search } from '../components/projects/Search';
import { SearchResults } from '../components/projects/SearchResults';
import {getProjects} from "../public/spreadsheet";
import {Project} from "../public/types";

const Projects: NextPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [projects, setProjects] = useState<Project[]>([])
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
		<PageLayout title="PWOC | PEC winter of code">
			<div>
				<Search
					onSearch={onSearch}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<SearchResults projects={projectSearchResults} />
			</div>
		</PageLayout>
	);
};

export default Projects;
