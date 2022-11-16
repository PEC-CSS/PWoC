import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Navbar} from "../componenets/Navbar";
import {Footer} from "../componenets/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
