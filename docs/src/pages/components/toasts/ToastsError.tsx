// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastError = () => {
  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='ri-close-line mbe-2 text-[32px]' />
      <Typography className='mbe-4 font-medium'>Error</Typography>
      <Typography className='mbe-3'>Indicate that an error occurred.</Typography>
      <Button className='mbe-8'color='error' variant='contained' onClick={() => toast.error("This didn't work.", {
        autoClose: false,})}>
        Error
      </Button>
    </div>
  )
}

export default ToastError
