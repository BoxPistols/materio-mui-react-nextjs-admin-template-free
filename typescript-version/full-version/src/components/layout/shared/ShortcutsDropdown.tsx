'use client'

// React Imports
import { useCallback, useRef, useState } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import CustomAvatar from '@/@core/components/mui/Avatar'

// Config Imports
import themeConfig from '@configs/themeConfig'

export type ShortcutsType = {
  url: string
  icon: string
  title: string
  subtitle: string
}

const ScrollWrapper = ({ children, hidden }: { children: ReactNode; hidden: boolean }) => {
  if (hidden) {
    return <div className='overflow-x-hidden max-bs-[434px]'>{children}</div>
  } else {
    return (
      <PerfectScrollbar className='max-bs-[434px]' options={{ wheelPropagation: false, suppressScrollX: true }}>
        {children}
      </PerfectScrollbar>
    )
  }
}

const ShortcutsDropdown = ({ shortcuts }: { shortcuts: ShortcutsType[] }) => {
  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)

  // Hooks
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleToggle = useCallback(() => {
    setOpen(prevOpen => !prevOpen)
  }, [])

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleToggle} className='!text-textPrimary'>
        <i className='ri-star-smile-line' />
      </IconButton>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        {...(isSmallScreen
          ? {
              className: 'is-full !mbs-4 z-[1]',
              modifiers: [
                {
                  name: 'preventOverflow',
                  options: {
                    padding: themeConfig.layoutPadding
                  }
                }
              ]
            }
          : { className: 'is-96 !mbs-4 z-[1]' })}
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top' }}>
            <Paper className='shadow-lg'>
              <ClickAwayListener onClickAway={handleClose}>
                <div>
                  <div className='flex items-center justify-between plb-4 pli-5 is-full gap-2'>
                    <Typography variant='h6'>Shortcuts</Typography>
                    <Tooltip
                      title='Add Shortcut'
                      placement={placement === 'bottom-end' ? 'left' : 'right'}
                      slotProps={{
                        popper: {
                          sx: {
                            '& .MuiTooltip-tooltip': {
                              transformOrigin:
                                placement === 'bottom-end' ? 'right center !important' : 'right center !important'
                            }
                          }
                        }
                      }}
                    >
                      <IconButton size='small' className='text-textPrimary'>
                        <i className='ri-add-line' />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <Divider />
                  <ScrollWrapper hidden={hidden}>
                    <Grid container>
                      {shortcuts.map((shortcut, index) => (
                        <Grid
                          item
                          xs={6}
                          key={index}
                          onClick={handleClose}
                          className='[&:not(:last-of-type):not(:nth-last-of-type(2))]:border-be odd:border-ie'
                        >
                          <Link
                            href={shortcut.url}
                            className='flex items-center flex-col p-6 gap-3 bs-full hover:bg-actionHover'
                          >
                            <CustomAvatar size={50} className='bg-actionSelected'>
                              <i className={classnames('text-[1.625rem]', shortcut.icon)} />
                            </CustomAvatar>
                            <div className='flex flex-col items-center text-center'>
                              <Typography className='font-medium' color='text.primary'>
                                {shortcut.title}
                              </Typography>
                              <Typography variant='body2'>{shortcut.subtitle}</Typography>
                            </div>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </ScrollWrapper>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default ShortcutsDropdown