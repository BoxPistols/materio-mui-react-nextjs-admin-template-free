// MUI Imports
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'

const ToastsThemed = () => {
  // Hooks
  const theme = useTheme()

  const handleClick = () => {
    return toast.success('Look at me, I have brand styles.', {
      style: {
        padding: '16px',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.contrastText
      },
      className: 'custom-toast',
      theme: 'colored',
      closeButton: false,
      progressStyle: {
        backgroundColor: theme.palette.primary.main
      }
    })
  }

  return (
    <div
     className='flex text-center flex-col items-center'
    >
      <i className='ri-palette-line mbe-2 text-[32px]' />
      <Typography className='mbe-4 font-medium'>Themed</Typography>
      <Typography className='mbe-3'>Customize the default styles the way you want.</Typography>
      <Button className='mbe-8'variant='contained' onClick={handleClick}>
        Themed
      </Button>
    </div>
  )
}

export default ToastsThemed
