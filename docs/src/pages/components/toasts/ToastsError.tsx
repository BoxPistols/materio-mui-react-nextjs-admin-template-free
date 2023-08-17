// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const ToastError = () => {
  return (
    <Box
      sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column', '& svg': { mb: 2 } }}
    >
      <Icon icon='mdi:close' fontSize='2rem' />
      <Typography sx={{ mb: 4, fontWeight: 500 }}>Error</Typography>
      <Typography sx={{ mb: 3 }}>Indicate that an error occurred.</Typography>
      <Button sx={{ mb: 8 }} color='error' variant='contained' onClick={() => toast.error("This didn't work.")}>
        Error
      </Button>
    </Box>
  )
}

export default ToastError
