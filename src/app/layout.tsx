import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crowsfeet Jewels',
  description: 'Where stuff is made with love :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
