// Next Imports
import { Inter } from 'next/font/google'

// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Component Imports
import I18n from '../components/i18n'
import ThemeProvider from '../components/theme'

// Style Imports
import './globals.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

// Generated Icon Imports
import '../assets/iconify-icons/generated-icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <I18n />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
