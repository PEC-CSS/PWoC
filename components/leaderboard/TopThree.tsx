// import { motion } from "framer-motion"
// import Image from "next/image"
// import type React from "react" // Added import for React

// interface Participant {
//   id: number
//   name: string
//   score: number
//   avatar: string
// }

// interface TopThreeProps {
//   topList: Participant[]
// }

// const TopThree: React.FC<TopThreeProps> = ({ topList }) => {
//   const positions = [1, 0, 2] // Center, Left, Right

//   return (
//     <div className="flex justify-center items-end mb-16 space-x-4">
//       {positions.map((position, index) => {
//         const participant = topList[position]
//         const delay = index * 0.2
//         const isFirst = position === 0

//         return (
//           <motion.div
//             key={participant.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay }}
//             className={`flex flex-col items-center ${isFirst ? "mb-8" : ""}`}
//           >
//             <div className={`relative ${isFirst ? "w-32 h-32" : "w-24 h-24"} mb-4`}>
//               <Image
//                 src={participant.avatar || "/placeholder.svg"}
//                 alt={participant.name}
//                 layout="fill"
//                 className="rounded-full border-4 border-[#0B4F6C]"
//               />
//               <div
//                 className={`absolute -bottom-2 -right-2 ${isFirst ? "w-10 h-10" : "w-8 h-8"} bg-[#0B4F6C] rounded-full flex items-center justify-center text-white font-bold`}
//               >
//                 {position + 1}
//               </div>
//             </div>
//             <h3 className="text-lg font-semibold text-[#0B4F6C]">{participant.name}</h3>
//             <p className="text-sm text-[#0B4F6C]/70">{participant.score} points</p>
//           </motion.div>
//         )
//       })}
//     </div>
//   )
// }

// export default TopThree


import {Item} from "../../typings/types";
import {TopCard} from "./TopCard";

export const TopThree = ({topList}: {topList: Item[]}) => {
    const [first, second, third] = topList
    return (
        <>      
        <div className="mt-4 mb-10 py-8 flex relative z-10 w-full place-content-center">
            <div className="relative left-[25px] sm:left-[35px] top-[25px] scale-[0.7] sm:scale-[0.8] z-10" >
                <TopCard item={second} color='#c0c0c0'/>
            </div>
            <div className="relative left-[0px] top-[0px] scale-[0.9] sm:scale-[1] z-20" >
                <TopCard item={first} color='#ffd700'/>
            </div>
            <div className="relative -left-[25px] sm:-left-[35px] top-[50px] scale-[0.6] sm:scale-[0.7] z-0" >
                {third && <TopCard item={third} color='#bb8f4c'/>}
            </div>
        </div>
       </>
    )
}
