// pages/404.js
import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function fourzerofour() {
    return (
        <Layout>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <h1 className={`${utilStyles.headingXl} ${utilStyles.lightText}`}>
                404 - Page Not Found!!
            </h1>

        </Layout>
    );
  }
  