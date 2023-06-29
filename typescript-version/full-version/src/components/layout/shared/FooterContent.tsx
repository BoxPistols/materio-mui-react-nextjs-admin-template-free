'use client'

// React Imports
import type { CSSProperties } from 'react'

// Next Imports
import Link from 'next/link'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'
import useSettings from '../../../@core/hooks/useSettings'

// Util Imports
import { layoutClasses } from '../../../@layouts/utils/utilityClasses'

const commonStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}

const FooterContent = () => {
  const { settings } = useSettings()
  const { isBreakpointReached: isVerticalBreakpointReached } = useVerticalNav()
  const { isBreakpointReached: isHorizontalBreakpointReached } = useHorizontalNav()

  const isBreakpointReached =
    settings.layout === 'vertical' ? isVerticalBreakpointReached : isHorizontalBreakpointReached

  return (
    <div
      className={layoutClasses.footerContent}
      style={{ ...commonStyles, justifyContent: 'space-between', flexWrap: 'wrap' }}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href='https://themeselection.com' target='_blank' style={{ color: '#765feb' }}>
          ThemeSelection
        </Link>
      </p>
      {!isBreakpointReached && (
        <div style={{ ...commonStyles }}>
          <Link href='https://themeselection.com/license' target='_blank' style={{ color: '#765feb' }}>
            License
          </Link>
          <Link href='https://themeselection.com' target='_blank' style={{ color: '#765feb' }}>
            More Themes
          </Link>
          <Link href='/' target='_blank' style={{ color: '#765feb' }}>
            Documentation
          </Link>
          <Link href='https://themeselection.com/support' target='_blank' style={{ color: '#765feb' }}>
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
