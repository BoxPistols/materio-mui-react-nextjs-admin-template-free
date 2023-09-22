// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Style Imports
import styles from './styles.module.css'

const CardWatch = () => {
  return (
    <Card>
      <CardMedia image='/images/cards/5.png' className={styles.watchBgImg} />
      <CardContent>
        <Typography variant='h6' className='mbe-2'>
          Apple Watch
        </Typography>
        <Typography className='mbe-2'>$249.40</Typography>
        <Typography variant='body2'>
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
        </Typography>
      </CardContent>
      <Button variant='contained' fullWidth className='rounded-none'>
        Add to Cart
      </Button>
    </Card>
  )
}

export default CardWatch