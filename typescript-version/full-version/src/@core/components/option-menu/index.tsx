'use client'

// React Imports
import { useRef, useState } from 'react'
import type { ReactNode, SyntheticEvent } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Box from '@mui/material/Box'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'

// Type Imports
import type { OptionsMenuType, OptionType, OptionMenuItemType } from './types'

const MenuItemWrapper = ({ children, option }: { children: ReactNode; option: OptionMenuItemType }) => {
  if (option.href) {
    return (
      <Box component={Link} href={option.href} {...option.linkProps}>
        {children}
      </Box>
    )
  } else {
    return <>{children}</>
  }
}

const OptionMenu = (props: OptionsMenuType) => {
  // Props
  const { icon, options, leftAlignMenu, iconButtonProps } = props

  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <IconButton ref={anchorRef} size='small' onClick={handleToggle} {...iconButtonProps}>
        {typeof icon === 'string' ? (
          <i className={icon} />
        ) : (icon as ReactNode) ? (
          icon
        ) : (
          <i className='ri-more-2-line' />
        )}
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={leftAlignMenu ? 'bottom-start' : 'bottom-end'}
        transition
        disablePortal
        sx={{ zIndex: 1 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  {options.map((option: OptionType, index: number) => {
                    if (typeof option === 'string') {
                      return (
                        <MenuItem key={index} onClick={handleClose}>
                          {option}
                        </MenuItem>
                      )
                    } else if ('divider' in option) {
                      return option.divider && <Divider key={index} {...option.dividerProps} />
                    } else {
                      return (
                        <MenuItem
                          key={index}
                          {...option.menuItemProps}
                          {...(option.href && { className: 'p-0' })}
                          onClick={e => {
                            handleClose(e)
                            option.menuItemProps && option.menuItemProps.onClick
                              ? option.menuItemProps.onClick(e)
                              : null
                          }}
                        >
                          <MenuItemWrapper option={option}>
                            {(typeof option.icon === 'string' ? <i className={option.icon} /> : option.icon) || null}
                            {option.text}
                          </MenuItemWrapper>
                        </MenuItem>
                      )
                    }
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default OptionMenu
