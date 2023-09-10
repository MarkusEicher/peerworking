import './globals.css'


export const metadata = {
  title: 'peerworking.ch',
  description: 'SEO optimized description goes here',
  keywords: 'peerworking, healthcare, coaching, experienced involvement, mental health'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
