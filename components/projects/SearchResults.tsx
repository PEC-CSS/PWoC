import { Project } from '../../public/types';
import { SearchResultCard } from './SearchResultCard';

export const SearchResults = ({ projects }: { projects: Project[] }) => {
	return (
		<div className='search-results grid [@media(min-width:992px)]:grid-cols-3 mx-auto md:grid-cols-2 grid-cols-1 md:w-[750px] [@media(min-width:992px)]:w-[970px] [@media(min-width:1200px)]:w-[1170px]'>
			{projects.map((project, i) => (
				<SearchResultCard project={project} key={`project-${i}`} />
			))}
		</div>
	);
};