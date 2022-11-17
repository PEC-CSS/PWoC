import Image from 'next/image';
import { ProjectResult } from '../../public/types';

export const SearchResultCard = ({ project }: { project: ProjectResult }) => {
	console.log(project);
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg'>
			<Image
				src='https://avatars.githubusercontent.com/u/54832562?s=200&v=4'
				alt='Project Logo'
				className='w-full'
                width={200}
                height={200}
				// style={{ height: '33%' }}
			/>
			<div
				className='flex flex-col '
				// style={{ height: '66%' }}
			>
				<div className='sm:px-6 sm:py-4 px-4 py-3'>
					<div className='font-bold text-xl mb-2 text-center'>
						{project.title}
					</div>
					<p className='text-gray-700 text-base'>
						{project.description}
					</p>
				</div>
				<div className='px-6 pt-4 pb-2'>
					{project.techStack.map((techStack, idx) => (
						<div
							className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							key={`Project-${project.title}-techStack-${project.techStack[idx]}`}
						>
							{techStack}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
