import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BASEONE - Air Minum Demineral Murni',
  description: 'PT. Delta Baseone Artha - Air minum dalam kemasan dengan teknologi demineral tercanggih untuk kesehatan optimal',
  keywords: 'air minum, demineral, BASEONE, PT Delta Baseone Artha, air murni, kesehatan',
  openGraph: {
    title: 'BASEONE - Air Minum Demineral Murni',
    description: 'Air minum dengan tingkat kemurnian tertinggi untuk kesehatan optimal',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}