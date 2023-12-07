import './globals.css'
import type { Metadata } from 'next'
import { Dancing_Script,Cormorant_Garamond,Inter } from 'next/font/google'

const inter = Inter({subsets: ['cyrillic'],
})

export const metadata: Metadata = {
  title: 'Triad',
  description: 'minimalistic game ranking site',
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
