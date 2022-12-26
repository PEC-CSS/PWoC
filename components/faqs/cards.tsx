import { Faq } from '../../public/types';

export const Card = ({ faq }: { faq: Faq }) => {

	return (
		<div className='card glassmorphism bg-[rgba(55,65,81,0.3)] p-7 rounded-2xl h-auto'>
			<div className='faq-icon'>{faq.icon}</div>
			<div className='faq-title'>{faq.title}</div>
			<div className='faq-description'>{faq.description}</div>
		</div>
	);
};
