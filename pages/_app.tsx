import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  <SessionProvider session={pageProps.session}>
    return <Component {...pageProps} />
  </SessionProvider>;
}

export default MyApp
