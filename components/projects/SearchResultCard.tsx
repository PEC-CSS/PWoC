import Image from 'next/image';
import { useState } from 'react';
import LaptopIcon from '@mui/icons-material/Laptop';
import Tooltip from '@mui/material/Tooltip';
import {GitHub} from "@mui/icons-material";
import {Project} from "../../public/types";

export const SearchResultCard = ({ project }: { project: Project }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className='glassmorphism bg-[rgba(0,0,0,0.3)] max-w-sm rounded overflow-hidden mx-auto pt-[10px] px-[15px] mb-[15px] transition-all duration-100 ease-in-out'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div
				className={`shadow-[0_25px_20px_-21px_rgb(0,0,0,57%)] bg-[#000814] min-h-[250px] rounded-lg flex ${
					hover ? 'bg-[#000000bf]' : ''
				}`}
			>
				<Image
					src='https://winterofcode.com/static/media/woc.a24fa30d.png'
					alt='Project Logo'
					className={`m-auto rounded-lg hover:opacity-100`}
					width={300}
					height={200}
				/>
				<a
					href={project.githubLink}
					target='_blank'
					rel='noreferrer'
					className={`absolute top-0 left-0 w-full h-full rounded-lg hover:bg-[#000000bf]`}
				/>
				<b
					className={`actions absolute top-1/2 left-0 w-full h-0 text-center z-[3] transition-all ease-[cubic-bezier(0.17, 0.67, 0.83, 0.67)] duration-500 delay-[0ms] ${
						hover ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Tooltip title='Github Repo' placement='top' arrow>
						<a
							href={project.githubLink}
							target='_blank'
							rel='noreferrer'
							className={`text-[18px] p-[14px] leading-none inline-block w-[48px] h-[48px] top-1/2 relative bg-white opacity-100 border rounded-[30px] -translate-y-1/2 text-[#666] mx-1 hover:opacity-[.85]`}
						>
							<GitHub fontSize='small' />
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
			<div className='flex flex-col p-[15px] rounded-b-xl justify-center items-center'>
				<div>
					<div className='font-bold text-xl mb-2 text-center mt-2.5'>
						{project.title}
					</div>
					<p
						className={`text-white text-base w-[300px] truncate overflow-visible whitespace-normal h-auto transition-all ease-[cubic-bezier(0.17, 0.67, 0.83, 0.67)] duration-500 delay-[0ms]`}
					>
						{project.description}
					</p>
				</div>
				<div className='pt-3 flex flex-wrap justify-center items-center'>
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
