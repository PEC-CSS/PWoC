import { Project } from '../../typings/types';
import { SearchResultCard } from './SearchResultCard';

export const SearchResults = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='search-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]'>
      {projects.map((project, i) => (
        <SearchResultCard project={project} key={`project-${i}`} />
      ))}
    </div>
  );
};
