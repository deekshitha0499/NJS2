import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import ApiDetailProvider from '../src/context/ApiDetailProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApiDetailProvider>
        <Header />
        <Component {...pageProps} />
      </ApiDetailProvider>
    </>
  );
}

export default MyApp
