// React Imports
import type { ReactNode } from 'react'

// Next Imports
import { Inter } from 'next/font/google'

// Style Imports
import './globals.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div id='root'>{children}</div>
      </body>
    </html>
  )
}
