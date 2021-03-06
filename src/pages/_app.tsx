import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { siteData } from '@/data';

const App = ({ Component, pageProps, }: AppProps) => (
  <>
    <Head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'
      />

      <link rel='shortcut icon' type='image/x-icon' href={`${siteData.siteUrl}/favicon.ico`} />
      <link rel='icon' type='image/x-icon' href={`${siteData.siteUrl}/favicon.ico`} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
