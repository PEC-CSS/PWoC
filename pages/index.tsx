import Image from 'next/image'
import { NextPage } from "next";
import Timeline from '../components/Timeline';
import Lottie from "react-lottie-player";
import { useState } from "react";
import pwoc_logo_no_text from "../public/assets/logo/pwoc_logo_no_text.png";
import linux_logo from "../public/assets/logo/linux_logo.png";
import PageLayout from '../components/layout/PageLayout';
import { TitleCard } from '../components/index/TitleCard';
import { BasicContentCard } from '../components/index/BasicContentCard';
import { RegistrationCard } from '../components/index/RegistrationCard';

const Home: NextPage = () => {

    const [play, setPlay] = useState(true)

    return (
        <PageLayout title="PWOC | PEC winter of code">
            <div className='h-[75%] w-screen'>

            </div>

            <div className='flex bg-[#c9305498] glassmorphism py-4 md:py-8 my-5 md:mx-5'>

                <div className='hidden md:flex justify-start h-[300px] w-[700px] my-auto'>
                    <Image src={pwoc_logo_no_text} alt="" className='animate-[spin_8s_linear_infinite] object-contain brightness-150' />
                </div>
                {/* Big Card */}
                <div className='flex justify-center mx-4'>
                    <TitleCard title="PWOC" subtitle="PEC Winter of Code" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nihil necessitatibus. Assumenda dicta eligendi quaerat repellendus nemo quae reprehenderit delectus harum magnam est ipsam vero similique quis dolorum repellat consequuntur labore cumque, vitae aliquam natus magni consequatur asperiores in distinctio." />
                </div>

                <div className='hidden md:flex justify-end h-[300px] w-[700px] my-auto'>
                    <Image src={pwoc_logo_no_text} alt="" className='animate-[spin_8s_linear_infinite] object-contain brightness-150' />
                </div>
            </div>

            {/* TODO: Update logo */}
            <div className='md:mx-4 mx-[4px] my-5'>
                <BasicContentCard title="About us" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nihil necessitatibus. Assumenda dicta eligendi quaerat repellendus nemo quae reprehenderit delectus harum magnam est ipsam vero similique quis dolorum repellat consequuntur labore cumque, vitae aliquam natus magni consequatur asperiores in distinctio." img={linux_logo} containerClass="border-2 border-red-600 p-4 md:py-8 md:px-10" titleClass = 'text-4xl md:text-6xl p-4' />
            </div>

            <div className='md:mx-4 mx-[4px] my-5'>
                <RegistrationCard />
            </div>

            <div>-- sponsors --</div>
            <div>
                <p>Timeline</p>
                <Timeline />
            </div>
        </PageLayout>
    )
}

export default Home;
