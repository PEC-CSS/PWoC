import Image from "next/image";
import Link from "next/link";
import logo from "./../public/assets/logo/pwoc_logo.png";
import pwoc_text_logo from "./../public/assets/logo/pwoc_text.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    return (
        <div className="bg-[#140006] grid grid-cols-3 md:px-7 sm:px-1 md:pt-5 sm:pt-2 pb-1 items-stretch">
            <div className="grid grid-cols-1 justify-center">
                <div className="flex">
                    <div className="text-2xl uppercase">Join us on discord</div>
                    <div>dc logo</div>
                </div>

                <div className="flex flex-col">
                    <div>
                        <Image src={pwoc_text_logo} alt="text logo" height={70} width={200} />
                    </div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>

            <div className="flex justify-center align-middle">
                <div className="flex flex-col margin-auto">
                    <Link href="/" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 transition text-lg hover:font-bold">Home</Link>
                    <Link href="leaderboard" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-lg">Leaderboard</Link>
                    <Link href="/projects" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-lg">Projects</Link>
                    <Link href="/sponsers" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-lg">Sponsers</Link>
                    <Link href="/faq" className="hover:text-sky-500 hover:underline hover:underline-offset-2 md:mb-2 sm:mb-0 transition text-lg">FAQ</Link>
                </div>
            </div>

            <div className="flex flex-col justify-around">
                <Image src={logo} alt="pwoc logo" width={150} height={150} className="self-center" />
                <div className="flex justify-center">
                    <FacebookRoundedIcon  sx={{fontSize: '30px', mx: '4px' }}/>
                    <InstagramIcon sx={{fontSize: '30px', mx: '4px' }} />
                    <LinkedInIcon  sx={{fontSize: '30px', mx: '4px' }}/>
                    {/* <LinkedInIcon  sx={{fontSize: '30px', mx: '4px' }}/> */}
                </div>
            </div>

            <div className="text-center md:mt-4 sm:mt-1 col-span-3">
                Copyright maybe
            </div>
        </div>
    )
}