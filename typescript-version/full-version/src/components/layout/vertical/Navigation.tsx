'use client'

// Component Imports from @menu-package
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu-package/vertical-menu'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useHorizontalNav from '@menu-package/hooks/useHorizontalNav'

const Navigation = () => {
  const { isBreakpointReached } = useHorizontalNav()

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav customStyles={{ zIndex: 'calc(var(--header-z-index) + 1)' }}>
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        {/* Hide Logo on Smaller screens */}
        {!isBreakpointReached && <Logo />}
        <NavCollapseIcons />
      </NavHeader>
      <VerticalMenu />
    </VerticalNav>
  )
}

export default Navigation
