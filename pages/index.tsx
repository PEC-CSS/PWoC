import Image from 'next/image'
import {NextPage} from "next";
import Timeline from '../components/Timeline';
import Head from 'next/head';

const Home: NextPage = ()=> {
    return (
        <div className='text-center h-screen w-screen scrollbar-hide'>
            <Head>
                <title>PWOC | PEC winter of code</title>
            </Head>
            <div className='h-[75%] w-scren relative'>
                <Image src={'https://s3-us-west-2.amazonaws.com/com.uppercut.hero-images/assets/0206/comps/206_02322.jpg?v=2020-06-22'} fill loading='lazy' alt='PWOC' style={{objectFit: 'cover'}} />
            </div>
            <p>-- some about us stuff --</p>
            <p>-- sponsors --</p>
            <div className='bg-blue-100'>

            <p>Timeline</p>
            <Timeline />
            </div>
        </div>
    )
}

export default Home;
