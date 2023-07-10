/*
 * We have locked the body scroll when the navigation sidebar is toggled.
 * This is done by using the `useLockBodyScroll` and `useToggle` hooks from `react-use` library.
 * If you want to unlock the body scroll when the navigation sidebar is toggled,
 * then comment or remove as directed in this file.
 */

'use client'

// React Imports
// Comment or remove following line in order to unlock body scroll when navigation sidebar is toggled
import { useEffect } from 'react'

// Third-party Imports
// Comment or remove following line in order to unlock body scroll when navigation sidebar is toggled
import { useLockBodyScroll, useToggle } from 'react-use'

// Icon Imports
import HamburgerMenuIcon from '../../../@layouts/svg/HamburgerMenu'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

const NavToggle = () => {
  // Hooks
  // Comment or remove following line in order to unlock body scroll when navigation sidebar is toggled
  const [scrollLocked, toggleScrollLocked] = useToggle(false)
  const { toggleVerticalNav, isToggled } = useVerticalNav()
  const { isBreakpointReached } = useHorizontalNav()

  // Comment or remove following line in order to unlock body scroll when navigation sidebar is toggled
  useLockBodyScroll(scrollLocked)

  // Toggle Vertical Nav
  const handleClick = () => {
    toggleVerticalNav()
  }

  // Comment or remove following useEffect in order to unlock body scroll when navigation sidebar is toggled
  useEffect(() => {
    isToggled ? toggleScrollLocked(true) : toggleScrollLocked(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToggled])

  return (
    <>
      {/* <span className='d-flex'>
        <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} />
      </span> */}
      {/* Comment following line and uncomment this line in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <span className='d-flex'>
          <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} />
        </span>
      )}
    </>
  )
}

export default NavToggle