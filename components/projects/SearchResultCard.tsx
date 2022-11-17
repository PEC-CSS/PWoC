import Image from 'next/image';
import { useState } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import LaptopIcon from '@mui/icons-material/Laptop';
import Tooltip from '@mui/material/Tooltip';
import { ProjectResult } from '../../public/types';

export const SearchResultCard = ({ project }: { project: ProjectResult }) => {
	const [hover, setHover] = useState(false);
	console.log(hover);

	return (
		<div
			className='max-w-sm rounded overflow-hidden shadow-lg'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className={`relative ${hover ? 'bg-[#000000bf]' : ''}`}>
				<Image
					src='https://avatars.githubusercontent.com/u/54832562?s=200&v=4'
					alt='Project Logo'
					className={`w-full ${hover ? 'opacity-100' : ''}`}
					width={200}
					height={200}
				/>
				<a
					href={project.githubLink}
					target='_blank'
					rel='noreferrer'
					className={`absolute top-0 left-0 w-full h-full ${
						hover ? 'bg-[#000000bf]' : ''
					}`}
				/>
				<b
					className={`actions absolute top-1/2 left-0 w-full h-0 text-center opacity-0 z-[3] transition-all ease-[cubic-bezier(0.17, 0.67, 0.83, 0.67)] duration-500 delay-[0ms] ${
						hover ? 'opacity-100' : ''
					}`}
				>
					<Tooltip title='More Details' placement='top' arrow>
						<a
							href={project.githubLink}
							target='_blank'
							rel='noreferrer'
							className={`text-[18px] p-[14px] leading-none inline-block w-[48px] h-[48px] top-1/2 relative bg-white opacity-100 border rounded-[30px] -translate-y-1/2 text-[#666] mx-1 hover:opacity-[.85]`}
						>
							<FormatAlignLeftIcon fontSize='small' />
						</a>
					</Tooltip>
					{project.deploymentLink.length === 0 ? null : (
						<Tooltip title='Live Preview' placement='top' arrow>
							<a
								href={project.deploymentLink}
								target='_blank'
								rel='noreferrer'
								className={`text-[18px] p-[14px] leading-none inline-block w-[48px] h-[48px] top-1/2 relative bg-white opacity-100 border rounded-[30px] -translate-y-1/2 text-[#666] mx-1 hover:opacity-[.85]`}
							>
								<LaptopIcon fontSize='small' />
							</a>
						</Tooltip>
					)}
				</b>
			</div>
			<div className='flex flex-col '>
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
