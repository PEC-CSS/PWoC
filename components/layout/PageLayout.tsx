import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../Footer";
import Snowfall from "react-snowfall";
import { Navbar } from "../Navbar";

type Props = {
    title: string;
    description?: string;
    children?: ReactNode;
};

function PageLayout({ title = "PWOC | PEC winter of code", children, description }: Props) {
    return (
        <div className="min-h-[100vh]">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/assets/logo/pwoc_logo.png"/>
                <meta name="author" content="PEC ACM CSS" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="z-[100]">
                <Navbar />            
            </div>
            <Snowfall
                snowflakeCount={150}
                style={{
                    zIndex: -1,
                    position: "fixed",
                }} />
            {children}
            <Footer />
        </div>
    );
}

export default PageLayout;