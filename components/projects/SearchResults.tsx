import { ProjectResult } from '../../public/types';
import { SearchResultCard } from './SearchResultCard';

export const SearchResults = ({ projects }: { projects: ProjectResult[] }) => {
	return (
		<div className='search-results grid md:grid-cols-4 gap-10 w-11/12 mx-auto sm:grid-cols-3 grid-cols-2'>
			{projects.map((project, i) => (
				<SearchResultCard project={project} key={`project-${i}`} />
			))}
		</div>
	);
};
