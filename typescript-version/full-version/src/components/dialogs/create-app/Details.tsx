// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

// Component Imports
import DirectionalIcon from '@components/DirectionalIcon'

// Config Imports
import themeConfig from '@configs/themeConfig'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
}

const Details = ({ activeStep, isLastStep, handleNext, handlePrev }: Props) => {
  // States
  const [value, setValue] = useState<string>('crm')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <TextField fullWidth label='Application Name' placeholder={`${themeConfig.templateName}`} />
      <div className='flex flex-col gap-4'>
        <Typography variant='h6'>Category</Typography>
        <div onClick={() => setValue('crm')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <i className='ri-bar-chart-box-line' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>CRM Application</Typography>
              <Typography variant='caption'>Scales with any business</Typography>
            </div>
          </div>
          <Radio value='crm' onChange={handleChange} checked={value === 'crm'} />
        </div>
        <div onClick={() => setValue('eCommerce')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <i className='ri-shopping-cart-line' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>eCommerce Platforms</Typography>
              <Typography variant='caption'>Grow Your Business With App</Typography>
            </div>
          </div>
          <Radio value='eCommerce' onChange={handleChange} checked={value === 'eCommerce'} />
        </div>
        <div onClick={() => setValue('learning')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <Avatar variant='rounded'>
              <i className='ri-video-upload-line' />
            </Avatar>
            <div className='flex flex-col gap-1'>
              <Typography>Online Learning platform</Typography>
              <Typography variant='caption'>Start learning today</Typography>
            </div>
          </div>
          <Radio value='learning' onChange={handleChange} checked={value === 'learning'} />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          variant='outlined'
          color='secondary'
          disabled={activeStep === 0}
          onClick={handlePrev}
          startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={isLastStep ? 'success' : 'primary'}
          onClick={handleNext}
          endIcon={
            isLastStep ? (
              <i className='ri-check-line' />
            ) : (
              <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
            )
          }
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Details
