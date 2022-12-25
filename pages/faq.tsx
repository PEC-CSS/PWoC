import { NextPage } from 'next';
import React from 'react';
import { BottomBar } from '../components/faqs/bottomBar';
import { Card } from '../components/faqs/cards';
import { TopBar } from '../components/faqs/topBar';
import PageLayout from '../components/layout/PageLayout';
import faqs from '../data/faqs.json';

const Faq: NextPage = () => {
	return (
		<PageLayout title='PWOC | FAQ'>
			<div className='container mx-auto flex flex-col gap-[50px] sm:gap-[55px] md:gap-[60px] lg:gap-[70px] xl:gap-[75px] py-[30px] sm:py-[35px] md:py-[40px] lg:py-[45px] xl:py-[50px] px-[15px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[75px]'>
				<TopBar />
				<div className='cards flex flex-col sm:flex-row flex-wrap justify-center gap-y-[35px] sm:gap-y-[40px] md:gap-y-[45px] lg:gap-y-[50px] gap-x-[35px]'>
					{faqs.map((faq, i) => (
						<Card faq={faq} key={`faq-${i}`} />
					))}
				</div>
				<BottomBar />
			</div>
		</PageLayout>
	);
};

export default Faq;
