import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Molnar',
  description: 'Robert Molnar portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MV4N8MLC" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
