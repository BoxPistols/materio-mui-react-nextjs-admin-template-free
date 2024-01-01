'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector from '@mui/material/StepConnector'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import StepPersonalDetails from './StepPersonalDetails'
import StepPropertyDetails from './StepPropertyDetails'
import StepPropertyFeatures from './StepPropertyFeatures'
import StepPropertyArea from './StepPropertyArea'
import StepPriceDetails from './StepPriceDetails'

// Styled Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

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

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void, direction: Direction) => {
  switch (step) {
    case 0:
      return (
        <StepPersonalDetails
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 1:
      return (
        <StepPropertyDetails
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 2:
      return (
        <StepPropertyFeatures
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 3:
      return (
        <StepPropertyArea
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    case 4:
      return (
        <StepPriceDetails
          activeStep={step}
          handleNext={handleNext}
          handlePrev={handlePrev}
          steps={steps}
          direction={direction}
        />
      )
    default:
      return null
  }
}

const ConnectorHeight = styled(StepConnector)(() => ({
  '& .MuiStepConnector-line': {
    minHeight: 20
  }
}))

const PropertyListingWizard = ({ direction }: { direction: Direction }) => {
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
      <CardContent className='border-be lg:border-be-0 lg:border-ie lg:min-is-[300px]'>
        <StepperWrapper className='bs-full'>
          <Stepper activeStep={activeStep} orientation='vertical' connector={<ConnectorHeight />}>
            {steps.map((step, index) => {
              return (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  <StepLabel className='p-0' StepIconComponent={StepperCustomDot}>
                    <div className='step-label cursor-pointer'>
                      <Typography className='step-number' color='text.primary'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title' color='text.primary'>
                          {step.title}
                        </Typography>
                        <Typography className='step-subtitle' color='text.primary'>
                          {step.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <CardContent className='flex-1 !pbs-5'>
        {getStepContent(activeStep, handleNext, handlePrev, direction)}
      </CardContent>
    </Card>
  )
}

export default PropertyListingWizard
