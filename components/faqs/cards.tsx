// import { Faq } from '../../typings/types';

// export const Card = ({ faq }: { faq: Faq }) => {

// 	return (
// 		<div className='card glassmorphism bg-[rgba(55,65,81,0.3)] p-7 rounded-2xl h-auto'>
// 			<div className='faq-icon'>{faq.icon}</div>
// 			<div className='faq-title'>{faq.title}</div>
// 			<div className='faq-description'>{faq.description}</div>
// 		</div>
// 	);
// };


// import { Description } from "@mui/icons-material"
import type React from "react"
import type { ReactNode } from "react"

export type Faq = {
    icon?: JSX.Element; // Make icon optional
    title: string;
    description: string;
};


const FAQCard = ({ faq }: { faq: Faq })  => {
  return (
    <div className="glassmorphism bg-[rgba(32,38,87,0.89)] p-7 rounded-2xl h-auto transition-all duration-300 hover:shadow-lg hover:bg-[rgba(11,79,108,0.4)]">
      <div className="faq-icon text-4xl text-white mb-4">{faq.icon}</div>
      <h3 className="faq-title text-xl font-semibold text-white mb-2">{faq.title}</h3>
      <p className="faq-description text-white/80">{faq.description}</p>
    </div>
  )
}

export default FAQCard

