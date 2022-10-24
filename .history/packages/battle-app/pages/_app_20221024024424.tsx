import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../components/GlobalStyles';
import ClickHandler
function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Battle Time🥳</title>
            </Head>
            <main className="app">
                <Component {...pageProps} />
                <ClickHandler/>
            </main>
            <GlobalStyles/>
        </>
    );
}

export default CustomApp;
