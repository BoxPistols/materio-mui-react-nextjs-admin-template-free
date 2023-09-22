// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { ConnectionsTabType } from '@/app/api/pages/profile/types'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const Connections = ({ data }: { data?: ConnectionsTabType[] }) => {
  return (
    <Grid container>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent className='flex items-center flex-col'>
                  <Avatar src={item.avatar} />
                  <Typography>{item.name}</Typography>
                  <Typography>{item.designation}</Typography>
                  <div className='flex items-center'>
                    {item.chips.map((chip, index) => (
                      <Link key={index} href='/' onClick={e => e.preventDefault()}>
                        <Chip label={chip.title} color={chip.color} size='small' />
                      </Link>
                    ))}
                  </div>
                  <div className='flex w-full items-center justify-around flex-wrap'>
                    <div className='flex items-center flex-col'>
                      <Typography>{item.projects}</Typography>
                      <Typography>Projects</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography>{item.tasks}</Typography>
                      <Typography>Tasks</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography>{item.connections}</Typography>
                      <Typography>Connections</Typography>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Button
                      variant={item.isConnected ? 'contained' : 'outlined'}
                      startIcon={
                        <Icon icon={item.isConnected ? 'mdi:account-check-outline' : 'mdi:account-plus-outline'} />
                      }
                    >
                      {item.isConnected ? 'connected' : 'connect'}
                    </Button>
                    <Button variant='outlined' color='secondary'>
                      <Icon icon='mdi:email-outline' />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Connections