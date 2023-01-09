import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Lottie from 'react-lottie-player';
import calendar from '../public/assets/animations/calendar.json';

function Events() {
	return (
		<PageLayout title='PWOC | Events' description='Coming soon...'>
			<div className='flex flex-col items-center my-[30px]'>
				<Lottie
					play
					loop
					animationData={calendar}
					className='h-[300px] w-auto my-[30px] z-10'
				/>
				<div className='font-bold text-[30px] animate-pulse'>
					Coming soon...
				</div>
			</div>
		</PageLayout>
	);
}

export default Events;
