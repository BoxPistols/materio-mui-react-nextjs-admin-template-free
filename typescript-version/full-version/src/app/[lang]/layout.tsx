// Next Imports
import { Inter } from 'next/font/google'

// Third-party Imports
import classnames from 'classnames'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import type { Locale } from '@configs/i18n'
import { i18n } from '@configs/i18n'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getDirection } from '@/utils/get-direction'

// Style Imports
//! Do not remove the `utils.css` import below otherwise it will break the template styling
import '@core/styles/utils.css' // Common Utility Classes
import '../globals.css'

// Generated Icon Imports
import '@assets/iconify-icons/generated-icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Master Next.js Framework Independent ',
  description: 'Master Next.js Framework Independent'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return (
    <html lang={params.lang} dir={direction} className='flex is-full min-bs-full'>
      <body className={classnames(inter.className, 'flex is-full min-bs-full flex-auto flex-col')}>
        {children}
        <ToastContainer position={themeConfig.toastPosition} />
      </body>
    </html>
  )
}

export default RootLayout