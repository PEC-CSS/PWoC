import { NextPage } from 'next';
import React, { useState } from 'react';
import { Search } from '../components/projects/Search';
import { SearchResults } from '../components/projects/SearchResults';
import projects from '../data/projects.json';

const Projects: NextPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [projectSearchResults, setProjectSearchResults] = useState(projects);

	const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(searchTerm);

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
		<div>
			<Search
				onSearch={onSearch}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<SearchResults projects={projectSearchResults} />
		</div>
	);
};

export default Projects;
