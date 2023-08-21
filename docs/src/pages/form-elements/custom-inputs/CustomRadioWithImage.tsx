// React Imports
import React, { ChangeEvent, useState } from 'react'

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
  },
]

const CustomRadioWithImage = () => {
  const initialSelected: string = data.filter((item) => item.isSelected)[
    data.filter((item) => item.isSelected).length - 1
  ].value

  // States
  const [selected, setSelected] = useState<string>(initialSelected)

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomInputImg
          type='radio'
          key={index}
          data={item}
          selected={selected}
          name='custom-radios-img'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomRadioWithImage