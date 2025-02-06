
// import { SearchResultCard } from './SearchResultCard';
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

// export const SearchResults = ({ projects }: { projects: Project[] }) => {
// 	return (
// 		<div className='search-results grid [@media(min-width:992px)]:grid-cols-3 mx-auto md:grid-cols-2 grid-cols-1 md:w-[750px] [@media(min-width:992px)]:w-[970px] [@media(min-width:1200px)]:w-[1170px]'>
// 			{projects.map((project, i) => (
// 				<SearchResultCard project={project} key={`project-${i}`} />
// 			))}
// 		</div>
// 	);
// };

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
