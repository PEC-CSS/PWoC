import Image from 'next/image';
import { SlBookOpen } from 'react-icons/sl';

const sponsors: any[] = [];

export const Sponsors = () => {
	return (
		<div className='glassmorphism bg-[#14000600] border-2 p-4 md:py-8 md:px-10'>
			<div
				className={`text-[#ef8220] uppercase text-2xl sm:text-3xl md:text-6xl p-4 text-center bg-[#cc66a24c] glassmorphism`}
			>
				Sponsors
			</div>
			<div className='py-8 px-7 flex flex-col gap-[20px] text-center items-center justify-center'>
				<span className='text-3xl'>Thanks for supporting us!</span>
				<p className='text-gray-200 text-lg'>
					Sponsor us and get featured in here with many more perks!
				</p>
				<a
					href='/assets/docs/PWOC_Sponsors_Brochure.pdf'
					target='_blank'
					rel='noreferrer'
					aria-label='PWOC Sponsors Brochure.'
				>
					<button className='glassmorphism py-3 px-7 w-fit border border-solid border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-blue-600 text-[20px] hover:text-white active:bg-gray-200 duration-200 active:text-black transition flex flex-row items-center'>
						<div className='mx-[5px]'>Get Brochure</div>
						<SlBookOpen className='mx-[5px]' />
					</button>
				</a>
			</div>
			<div className='sponsor-logos flex justify-center items-center flex-wrap'>
				{sponsors.map((sponsor) => (
					<a
						key={sponsor.name}
						href={sponsor.url}
						target='_blank'
						rel='noreferrer'
						aria-label={sponsor.name}
					>
						<Image
							className={`my-4 mx-8 align-middle h-auto ${sponsor.customClass}`}
							src={sponsor.logo}
							width={sponsor.width}
							height={sponsor.height}
							alt={sponsor.name}
						/>
					</a>
				))}
			</div>
		</div>
	);
};
