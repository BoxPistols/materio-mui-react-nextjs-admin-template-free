// React Imports
import React, { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputImgData } from '@site/src/components/custom-inputs/types'

// Components Imports
import CustomInputImg from '@site/src/components/custom-inputs/Image'

const data: CustomInputImgData[] = [
  {
    value: 'clock',
    isSelected: true,
    img: '/img/banners/27.jpg',
  },
  {
    value: 'donuts',
    img: '/img/banners/26.jpg',
  },
  {
    value: 'flowers',
    img: '/img/banners/22.jpg',
  }
]

const CustomCheckboxWithImage = () => {
  const initialSelected: string[] = data.filter(item => item.isSelected).map(item => item.value)

  // States
  const [selected, setSelected] = useState<string[]>(initialSelected)

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter(item => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomInputImg
          type='checkbox'
          key={index}
          data={item}
          selected={selected}
          name='custom-checkbox-img'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomCheckboxWithImage
