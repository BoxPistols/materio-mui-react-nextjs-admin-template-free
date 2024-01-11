'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const CustomStyles = () => {
  const { isBreakpointReached, updateVerticalNavState, isCollapsed } = useVerticalNav()

  return (
    <div className='flex bs-full'>
      <VerticalNav customBreakpoint='200px' customStyles={isCollapsed ? { color: 'red' } : { color: 'blue' }}>
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
      </VerticalNav>
      <main className='p-4 flex-grow'>
        {!isBreakpointReached && (
          <button onClick={() => updateVerticalNavState({ isCollapsed: !isCollapsed })} className='cursor-pointer'>
            Collapse
          </button>
        )}
      </main>
    </div>
  )
}

export default CustomStyles
