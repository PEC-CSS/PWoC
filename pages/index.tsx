import Head from 'next/head'
import Image from 'next/image'
import {NextPage} from "next";
import Timeline from '../components/Timeline';

const Home: NextPage = ()=> {
    return (
        <div className='text-center'>
            <p>-- Insert good looking poster here --</p>
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
