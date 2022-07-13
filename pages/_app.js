import '../styles/globals.css'
import Layout from '../components/Layout';
import Head from 'next/head';

import theme from '../lib/theme';

import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Head>
          <style>
          @import url(&apos;https://fonts.googleapis.com/css2?family=Poppins&family=Lato:wght@400;600;700&family=Quicksand:wght@400;600;700&display=swap&apos;)
          </style>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;








