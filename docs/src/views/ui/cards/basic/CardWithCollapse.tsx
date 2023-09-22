// React Imports
import React, { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardWithCollapse = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardMedia image='/images/cards/3.png' className={styles.collapseBgImg} />
      <CardContent>
        <Typography variant='h6' className='mbe-3'>
          Popular Uses Of The Internet
        </Typography>
        <Typography variant='body2'>
          Although cards can support multiple actions, UI controls, and an overflow menu.
        </Typography>
      </CardContent>
      <CardActions className='justify-between'>
        <Button onClick={() => setExpanded(!expanded)}>Details</Button>
        <IconButton onClick={() => setExpanded(!expanded)}>
          <Icon icon={expanded ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout={300}>
        <Divider />
        <CardContent>
          <Typography variant='body2'>
            I&#39;m a thing. But, like most politicians, he promised more than he could deliver. You won&#39;t have time
            for sleeping, soldier, not with all the bed making you&#39;ll be doing. Then we&#39;ll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You&#39;re going to do his laundry? I&#39;ve got
            to find a way to escape.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardWithCollapse