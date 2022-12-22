import Image from 'next/image'
import {NextPage} from "next";
import Timeline from '../components/Timeline';
import Head from 'next/head';
import snowfall from '../public/assets/animations/snowfall.json'
import Lottie from "react-lottie-player";
import {useState} from "react";
import Snowfall from "react-snowfall";
import { Footer } from '../components/Footer';

const Home: NextPage = ()=> {

    const [play, setPlay] = useState(true)

    return (
        <div className='text-center h-screen w-screen scrollbar-hide'>
            <Head>
                <title>PWOC | PEC winter of code</title>
            </Head>
            <div className='h-[75%] w-screen'>

            </div>
            <div>-- some about us stuff --</div>
            <div>-- sponsors --</div>
            <div className='border-red-500'>
                <p>Timeline</p>
                <Timeline />
            </div>

            <Footer />
        </div>
    )
}

export default Home;
