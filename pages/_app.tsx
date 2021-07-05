import Head from "next/head";
import React from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from "styled-components";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; 

import { GlobalStyle } from "../theme/GlobalStyles";
import { baseTheme } from "../theme/theme";

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Sharon He</title>
        <meta name="title" content="Sharon He" />
      </Head>
      <ThemeProvider theme={baseTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp;
