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
        <link 
          rel="apple-touch-icon" 
          sizes="180x180" 
          href="/apple-touch-icon.png"
        />
        <link 
          rel="icon" 
          type="image/png" 
          sizes="32x32" 
          href="/favicon-32x32.png"
        />
        <link 
          rel="icon" 
          type="image/png" 
          sizes="16x16" 
          href="/favicon-16x16.png"
        />
        <link 
          rel="manifest" 
          href="/site.webmanifest"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=1" type="image/x-icon" />
        <link 
          rel="mask-icon" 
          href="/safari-pinned-tab.svg" 
          color="#5bbad5"
        />
        <meta 
          name="msapplication-TileColor" 
          content="#2b5797"
        />
        <meta 
          name="theme-color" 
          content="#f7faff"
        />
      </Head>
      <ThemeProvider theme={baseTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp;
