// import { ReactNode, useState } from "react"
// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/card"
// // import { Badge } from "@/components/ui/badge"
// import { Button } from "../../components/button"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ToolTip"
// import { Globe, ArrowRight, ArrowLeft, Mail } from "lucide-react"
// import Link from "next/link"

// export type Project = {
//     title: string,
//     techStack: string[],
//     description: string | undefined,
//     githubLink: string | undefined,
//     deploymentLink: string | undefined,
//     mentor: string,
//     mentorGithubLink: string | undefined,
//     mentorLinkedinLink: string | undefined,
//     mentorEmail: string | undefined,
//     mentorMobileNumber: number,
//     mentorDiscordUsername: string | undefined
// }

// export const SearchResultCard = ({ project }: { project: Project }) => {
//   const [isFlipped, setIsFlipped] = useState(false)

//   return (
//     // <motion.div
//     //   className="h-[430px] w-full max-w-[380px] perspective"
//     //   initial={{ opacity: 0, y: 20 }}
//     //   animate={{ opacity: 1, y: 0 }}
//     //   transition={{ duration: 0.5 }}
//     // >
//     //   <motion.div
//     //     className="w-full h-full relative transition-all duration-500 preserve-3d"
//     //     animate={{ rotateY: isFlipped ? 180 : 0 }}
//     //   >
       
//         <div>
//         <Card className="absolute w-full h-full backface-hidden bg-white/90 backdrop-blur-sm border-none shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-2xl text-[#0B4F6C] text-center">{project.title}</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col h-[calc(100%-88px)]">
//             <CardDescription className="text-[#0B4F6C]/70 mb-4 flex-grow overflow-y-auto">
//               {project.description}
//             </CardDescription>
//             <div className="flex flex-wrap gap-2 mb-4">
//               {/* {project.techStack.map((tech) => (
//                 <Badge key={tech} variant="secondary" className="bg-[#0B4F6C]/10 text-[#0B4F6C]">
//                   {tech}
//                 </Badge>
//               ))} */}
//             </div>
//             <div className="flex justify-center space-x-4 mb-4">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" asChild>
//                       <Link href={'project.githubLink'} target="_blank" rel="noopener noreferrer">
//                         {/* <Github className="h-4 w-4" /> */}
//                       </Link>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>GitHub Repository</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//               {project.deploymentLink && (
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Button variant="outline" size="icon" asChild>
//                         <Link href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
//                           <Globe className="h-4 w-4" />
//                         </Link>
//                       </Button>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Live Preview</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               )}
//             </div>
//             <Button variant="link" onClick={() => setIsFlipped(true)} className="text-[#0B4F6C]">
//               View Mentor Info <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </CardContent>
//         </Card>

        
//         <Card className="absolute w-full h-full backface-hidden bg-white/90 backdrop-blur-sm border-none shadow-lg [transform:rotateY(180deg)]">
//           <CardHeader>
//             <CardTitle className="text-2xl text-[#0B4F6C] text-center">Mentor Information</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col items-center justify-center h-[calc(100%-88px)]">
//             <h3 className="text-xl font-semibold text-[#0B4F6C] mb-2">{project.mentor}</h3>
//             <p className="text-[#0B4F6C]/70 mb-6">{project.mentorDiscordUsername}</p>
//             <div className="flex space-x-4 mb-8">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" asChild>
//                       <Link href={`mailto:${project.mentorEmail}`}>
//                         <Mail className="h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Email Mentor</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" asChild>
//                       <Link href={'project.mentorGithubLink'} target="_blank" rel="noopener noreferrer">
//                         {/* <Github className="h-4 w-4" /> */}
//                       </Link>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Mentor's GitHub</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button variant="outline" size="icon" asChild>
//                       <Link href={'project.mentorLinkedinLink'} target="_blank" rel="noopener noreferrer">
//                         {/* <Linkedin className="h-4 w-4" /> */}
//                       </Link>
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Mentor's LinkedIn</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//             <Button variant="link" onClick={() => setIsFlipped(false)} className="text-[#0B4F6C]">
//               <ArrowLeft className="mr-2 h-4 w-4" /> Back to Project
//             </Button>
//           </CardContent>
//         </Card>
//         </div>
//     //   </motion.div>
//     // </motion.div>
//   )
// }


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
						<a
							href={project.githubLink}
							target='_blank'
							rel='noreferrer'
							className={`text-[24px] items-center justify-center flex w-[40px] h-[40px] bg-white opacity-100 border rounded-[50%] text-[#666] mx-1 hover:opacity-[.85]`}
						>
							<BsGithub />
						</a>
					</Tooltip>

					{project.deploymentLink.length === 0 ? null : (
						<Tooltip title='Live Preview' placement='top' arrow>
							<a
								href={project.deploymentLink}
								target='_blank'
								rel='noreferrer'
								className={`text-[24px] flex items-center justify-center w-[40px] h-[40px] bg-white opacity-100 border rounded-[50%] text-[#666] mx-1 hover:opacity-[.85]`}
							>
								<LaptopIcon />
							</a>
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