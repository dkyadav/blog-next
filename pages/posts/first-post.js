import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function FirstPost(){
    return(
        <Layout>
            <Head>
                <title>First post </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div style={width='100px'}> */}
            <Image 
                src="/images/profile.jpg"
                height={144}
                width={144}
                //layout="fill"
                alt="Deepak profile"

            />
            {/* </div> */}
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1>First Post</h1>
            <p>This is the first post</p>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    );
}