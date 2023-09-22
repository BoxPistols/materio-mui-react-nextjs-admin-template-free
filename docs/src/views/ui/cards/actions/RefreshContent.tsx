// React Imports
import React, { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardActionRefreshContent = () => {
  // States
  const [reload, setReload] = useState(false)

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Card className='relative'>
      <CardHeader
        title='Refresh Content'
        action={
          <IconButton size='small' aria-label='refresh-content' onClick={handleBackDrop}>
            <Icon fontSize='1.25rem' icon='mdi:refresh' />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='body2'>
          Click on{' '}
          <span className='align-top'>
            <Icon fontSize='1.25rem' icon='mdi:refresh' />
          </span>{' '}
          icon to see it in action
        </Typography>
      </CardContent>

      <Backdrop open={reload} className={classnames('absolute text-white', styles.backdropZIndex)}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Card>
  )
}

export default CardActionRefreshContent