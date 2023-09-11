import { Asap } from 'next/font/google';
import Header from './components/header';
import './globals.css'

const fntAsap = Asap({
  weight: ['400', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'peerworking.ch',
  description: 'SEO optimized description goes here',
  keywords: 'peerworking, healthcare, coaching, experienced involvement, mental health'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fntAsap.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
