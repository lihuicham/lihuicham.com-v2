import type { AppProps } from 'next/app';
import RootLayout from '@/app/components/layout';
import { ApolloProvider } from '@apollo/client';
import client from '@/apollo-client'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RootLayout>
  );
}