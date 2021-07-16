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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Sharon He" />
        <meta
          name="description"
          content="Sharon He is a 19 y/o developer from Toronto, Canada who is passionate about data, infrastructure, and economics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sharonhe.me" />
        <meta property="og:title" content="Sharon He" />
        <meta
          property="og:description"
          content="Sharon He is a 19 y/o developer from Toronto, Canada who is passionate about data, infrastructure, and economics."
        />
        <meta
          property="og:image"
          content="https://sharonhe.me/meta.png"
        />
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
          color="#f7faff"
        />
        <meta 
          name="msapplication-TileColor" 
          content="#f7faff"
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
