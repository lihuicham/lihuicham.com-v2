import '../globals.css'
import { Poppins } from 'next/font/google'
// Fix font-awesome icon too big issue
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { NavigationBar } from './NavigationBar';
import Footer from './Footer';

config.autoAddCss = false;
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={poppins.className}>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
