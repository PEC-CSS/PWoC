import Image from 'next/image'
import { NextPage } from "next";
import Timeline from '../components/Timeline';
import Head from 'next/head';
import snowfall from '../public/assets/animations/snowfall.json'
import Lottie from "react-lottie-player";
import { useState } from "react";
import Snowfall from "react-snowfall";
import PageLayout from '../components/layout/PageLayout';

const Home: NextPage = () => {

    const [play, setPlay] = useState(true)

    return (
        <PageLayout title="PWOC | PEC winter of code">
            <div className='h-[75%] w-screen'>

            </div>
            <div>-- some about us stuff --</div>
            <div>-- sponsors --</div>
            <div>
                <p>Timeline</p>
                <Timeline />
            </div>
        </PageLayout>
    )
}

export default Home;
