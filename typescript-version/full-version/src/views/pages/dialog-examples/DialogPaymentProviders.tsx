// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import PaymentProviders from '@components/dialogs/payment-providers'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogPaymentProviders = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-secure-payment-line text-[32px]' />
        <Typography>Payment providers</Typography>
        <Typography>Elegant payment options modal popup example, easy to use in any page.</Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={PaymentProviders} />
      </CardContent>
    </Card>
  )
}

export default DialogPaymentProviders
