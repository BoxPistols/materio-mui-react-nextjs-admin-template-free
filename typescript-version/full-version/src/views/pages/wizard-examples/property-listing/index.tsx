'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'

// Component Imports
import StepPersonalDetails from './StepPersonalDetails'
import StepPropertyDetails from './StepPropertyDetails'
import StepPropertyFeatures from './StepPropertyFeatures'
import StepPropertyArea from './StepPropertyArea'
import StepPriceDetails from './StepPriceDetails'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

// Data
const steps = [
  {
    title: 'Personal Details',
    subtitle: 'Your Name/Email'
  },
  {
    title: 'Property Details',
    subtitle: 'Property Type'
  },
  {
    title: 'Property Features',
    subtitle: 'Bedrooms/Floor No'
  },
  {
    title: 'Property Area',
    subtitle: 'Covered Area'
  },
  {
    title: 'Price Details',
    subtitle: 'Expected Price'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void) => {
  const Tag =
    step === 0
      ? StepPersonalDetails
      : step === 1
        ? StepPropertyDetails
        : step === 2
          ? StepPropertyFeatures
          : step === 3
            ? StepPropertyArea
            : StepPriceDetails

  return <Tag activeStep={step} handleNext={handleNext} handlePrev={handlePrev} steps={steps} />
}

const PropertyListingWizard = () => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  const handleNext = () => {
    if (activeStep !== steps.length - 1) {
      setActiveStep(activeStep + 1)
    } else {
      alert('Submitted..!!')
    }
  }

  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <Card className='flex flex-col lg:flex-row'>
      <CardContent className='border-be lg:border-ie lg:min-is-[300px]'>
        <StepperWrapper className='h-full'>
          <Stepper activeStep={activeStep} connector={<></>} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label cursor-pointer'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <CardContent className='flex-1'>{getStepContent(activeStep, handleNext, handlePrev)}</CardContent>
    </Card>
  )
}

export default PropertyListingWizard
