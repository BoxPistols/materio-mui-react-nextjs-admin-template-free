'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useColorScheme, type Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Illustrations from '@components/Illustrations'

// Style Imports
import styles from './misc.module.css'

const NotAuthorized = () => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { mode, systemMode } = useColorScheme()

  const miscBackground =
    mode === 'dark' || systemMode === 'dark' ? '/images/pages/misc-mask-dark.png' : '/images/pages/misc-mask-light.png'

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center gap-10'>
        <div className={classnames('flex flex-col gap-2', { [styles.viewPortWidth]: isBelowSmScreen })}>
          <Typography variant='h1'>401</Typography>
          <Typography variant='h5'>You are not authorized! 🔐</Typography>
          <Typography variant='body2'>You don&#39;t have permission to access this page. Go Home!</Typography>
        </div>
        <img
          alt='error-illustration'
          src='/images/illustrations/characters/12.png'
          className={classnames('object-cover', styles.illustrationHeight, {
            [styles.illustrationHeightBelowLg]: isBelowLgScreen,
            [styles.illustrationHeightBelowMd]: isBelowMdScreen
          })}
        />
        <Button href='/' component={Link} variant='contained'>
          Back to Home
        </Button>
      </div>
      <Illustrations maskImg={{ src: miscBackground }} />
    </div>
  )
}

export default NotAuthorized
