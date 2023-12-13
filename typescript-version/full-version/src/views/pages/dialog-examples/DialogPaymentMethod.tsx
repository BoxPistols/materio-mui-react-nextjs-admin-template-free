// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import PaymentMethod from '@components/dialogs/payment-method'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogPaymentMethod = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-bank-card-2-line text-[28px]' />
        <Typography variant='h5'>Add Payment Method</Typography>
        <Typography>Elegant payment methods modal popup example, easy to use in any page.</Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={PaymentMethod} />
      </CardContent>
    </Card>
  )
}

export default DialogPaymentMethod
