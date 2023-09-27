'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import VerticalNavContent from '@components/layout/horizontal/VerticalNavContent'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu-package/horizontal-menu'

// Styled Components Imports
import styles from '../../styles.module.css'

const Breakpoints = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <NavToggle />
      <HorizontalNav
        switchToVertical
        breakpoints={{ lg: '1000px' }}
        verticalNavContent={VerticalNavContent}
        verticalNavProps={{ customStyles: { '& .ts-menu-button': { paddingBlock: '12px' } } }}
      >
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default Breakpoints