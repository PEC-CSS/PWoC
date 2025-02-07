import { useState } from 'react';
import LaptopIcon from '@mui/icons-material/Laptop';
import Tooltip from '@mui/material/Tooltip';
import ReactCardFlip from "react-card-flip";
import {BsGithub} from "react-icons/bs";
import {TbArrowBigRight, TbArrowBigRightLine} from "react-icons/tb";
import {IconContext} from "react-icons/lib";
import Link from "next/link";
import {SiGithub, SiGmail, SiLinkedin} from "react-icons/si";
import { Project } from '../../typings/types';

export const SearchResultCard = ({ project }: { project: Project }) => {
	const [flip, setFlip] = useState(false);

	return (
		<ReactCardFlip
			containerClassName="transition-all duration-100 ease-in-out h-[430px] [@media(min-width:992px)]:px-[5px] [@media(min-width:992px)]:w-[380px] my-2"
			isFlipped={flip}
		>
			<div
				className='glassmorphism bg-[rgba(32,38,87,0.70)] max-w-lg rounded overflow-hidden mx-auto pt-[10px] px-[15px] mb-[15px] flex flex-col p-[15px] rounded-b-xl items-center h-full w-full'
			>
				<div className='font-bold text-[35px] mb-2 text-center mt-2.5 text-white'>
					{project.title}
				</div>

				<p
					className={`text-white flex-auto text-base overflow-y-auto thin-scrollbar whitespace-normal h-[130px] transition-all ease-[cubic-bezier(0.17, 0.67, 0.83, 0.67)] duration-500 delay-[0ms] scroll-auto p-2`}
				>
					{project.description}
				</p>

				<div className='pt-3 flex flex-wrap justify-center items-center flex-auto w-full'>

					{project.techStack.map((techStack, idx) => (
						<div
							className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
							key={`Project-${project.title}-techStack-${project.techStack[idx]}`}
						>
							{techStack}
						</div>
					))}

				</div>

				<div className="flex flex-row items-center justify-evenly my-[10px] w-full">

					<Tooltip title='Github Repo' placement='top' arrow>
						<Link
							href={project.githubLink}
							target='_blank'
							rel='noreferrer'
							className={`text-[24px] items-center justify-center flex w-[40px] h-[40px] bg-white opacity-100 border rounded-[50%] text-[#666] mx-1 hover:opacity-[.85]`}
						>
							<BsGithub />
						</Link>
					</Tooltip>

					{project.deploymentLink.length === 0 ? null : (
						<Tooltip title='Live Preview' placement='top' arrow>
							<Link
								href={project.deploymentLink}
								target='_blank'
								rel='noreferrer'
								className={`text-[24px] flex items-center justify-center w-[40px] h-[40px] bg-white opacity-100 border rounded-[50%] text-[#666] mx-1 hover:opacity-[.85]`}
							>
								<LaptopIcon />
							</Link>
						</Tooltip>
					)}

				</div>

				<TbArrowBigRight className="cursor-pointer text-[25px] text-white" onClick={() => setFlip(true)} />

			</div>
			<div
				className="glassmorphism bg-[rgba(32,38,87,0.61)] max-w-sm rounded overflow-hidden mx-auto p-[15px] mb-[15px] w-full h-full flex flex-col items-center"
			>
				<div className="my-[10px] text-white">Mentor</div>
				<div className="font-bold text-2xl my-[10px] text-white">{project.mentor}</div>
				<div className="my-[10px] text-white">{project.mentorDiscordUsername}</div>
				<div className="flex flex-row w-full items-center justify-evenly flex-auto">

					<IconContext.Provider value={{ className: "text-[38px] md:text-[30px] mx-[8px] md:mx-[6px] text-[#DB4437] md:text-white md:hover:text-[#DB4437] md:hover:translate-y-[-4px] ease-out duration-300" }}>
						<Link href={`mailto:${project.mentorEmail}`} target="_blank">
							<SiGmail />
						</Link>
					</IconContext.Provider>

					<IconContext.Provider value={{ className: "text-[38px] md:text-[30px] md:text-white text-[#fe0b9bbbd09b] md:text-white md:hover:text-[#b9bbbd] mx-[8px] md:mx-[6px] md:hover:translate-y-[-4px] ease-out duration-300" }}>
						<Link href={project.mentorGithubLink} target="_blank">
							<SiGithub />
						</Link>
					</IconContext.Provider>

					<IconContext.Provider value={{ className: "text-[38px] md:text-[30px] text-[#0072b1] md:text-white md:hover:text-[#0072b1] md:text-white md:hover:text-[#1977f3] mx-[8px] md:mx-[6px] md:hover:translate-y-[-4px] ease-out duration-300" }}>
						<Link href={project.mentorLinkedinLink} target="_blank">
							<SiLinkedin />
						</Link>
					</IconContext.Provider>

				</div>
				<TbArrowBigRightLine className="cursor-pointer text-[25px] text-white" onClick={() => setFlip(false)} />
			</div>
		</ReactCardFlip>
	);
};