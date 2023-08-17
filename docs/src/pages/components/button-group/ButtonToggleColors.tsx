// React Imports
import React, { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ButtonToggleColors = () => {
  // States
  const [alignment, setAlignment] = useState<string | null>('web')

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      <ToggleButtonGroup exclusive color='primary' value={alignment} onChange={handleAlignment}>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup exclusive color='secondary' value={alignment} onChange={handleAlignment}>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup exclusive color='success' value={alignment} onChange={handleAlignment}>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup exclusive color='error' value={alignment} onChange={handleAlignment}>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup exclusive color='warning' value={alignment} onChange={handleAlignment}>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup exclusive color='info' value={alignment} onChange={handleAlignment}>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

export default ButtonToggleColors
