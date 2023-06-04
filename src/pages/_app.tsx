import type { AppProps } from 'next/app';
import RootLayout from '@/app/components/layout';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}