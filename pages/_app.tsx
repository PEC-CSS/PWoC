import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import Snowfall from "react-snowfall";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navbar />
            <Snowfall
                snowflakeCount={200}
                style={{
                    zIndex: -1,
                    position: "fixed"
                }}/>
            <Component {...pageProps} />
            {/* <Footer /> */}
        </div>
    )
}
