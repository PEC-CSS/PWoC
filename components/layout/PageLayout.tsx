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
                {/* PWA configuration */}
                <meta name='application-name' content='PWOC | PEC Winter of Code' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={title} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/assets/icons/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#49000f' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#49000f' />

                <link rel='apple-touch-icon' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/assets/icons/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/assets/icons/apple-touch-icon.png' />

                <link rel='icon' type='image/png' sizes='32x32' href='/assets/icons/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/assets/icons/favicon-16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/assets/icons/safari-pinned-tab.svg' color='#49000f' />
                <link rel='shortcut icon' href='/assets/icons/favicon.ico' />
                <link rel='canonical' href='https://pwoc.vercel.app/' />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://pwoc.vercel.app/" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1673332670/pwoc_logo_bg_ih764w.png" />
                <meta name='twitter:creator' content='@pec_acm' />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pwoc.vercel.app/" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1673332670/pwoc_logo_bg_ih764w.png" />
                <meta property='og:site_name' content='PWOC | PEC winter of code' />
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