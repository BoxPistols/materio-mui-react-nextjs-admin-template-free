// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
  direction: Direction
}

const Submit = ({ activeStep, isLastStep, handleNext, handlePrev, direction }: Props) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-1'>
          <Typography variant='h5'>Submit 🥳</Typography>
          <Typography variant='body2'>Submit to kickstart your project.</Typography>
        </div>
        <img alt='submit-img' src='/images/illustrations/characters-with-objects/7.png' height={174} />
      </div>
      <div className='flex items-center justify-between'>
        <Button
          variant='outlined'
          color='secondary'
          disabled={activeStep === 0}
          onClick={handlePrev}
          startIcon={<i className={direction === 'rtl' ? 'ri-arrow-right-line' : 'ri-arrow-left-line'} />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={isLastStep ? 'success' : 'primary'}
          onClick={handleNext}
          endIcon={
            <i
              className={
                isLastStep ? 'ri-check-line' : direction === 'rtl' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'
              }
            />
          }
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Submit
