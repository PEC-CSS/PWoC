import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import BlockIcon from '@mui/icons-material/Block';
import FeedIcon from '@mui/icons-material/Feed';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Faq } from '../../public/types';

export const Card = ({ faq }: { faq: Faq }) => {
	const icon =
		faq.icon === 'FavoriteBorderIcon' ? (
			<FavoriteBorderIcon />
		) : faq.icon === 'SyncAltIcon' ? (
			<SyncAltIcon />
		) : faq.icon === 'BlockIcon' ? (
			<BlockIcon />
		) : faq.icon === 'FeedIcon' ? (
			<FeedIcon />
		) : faq.icon === 'CreditCardIcon' ? (
			<CreditCardIcon />
		) : faq.icon === 'MailOutlineIcon' ? (
			<MailOutlineIcon />
		) : null;

	return (
		<div className='card glassmorphism bg-[rgba(55,65,81,0.3)] p-7 rounded-2xl h-auto'>
			<div className='icon'>{icon}</div>
			<div className='title'>{faq.title}</div>
			<div className='description'>{faq.description}</div>
		</div>
	);
};
