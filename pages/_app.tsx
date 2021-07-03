import Head from "next/head";
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/GlobalStyles";
import { baseTheme } from "../theme/theme";

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
