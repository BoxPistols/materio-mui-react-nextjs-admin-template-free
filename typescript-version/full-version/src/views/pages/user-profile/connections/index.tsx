// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { ConnectionsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import Link from '@components/Link'

// Style Imports
import commonStyles from '@/styles/common.module.css'

const Connections = ({ data }: { data?: ConnectionsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className='relative'>
                <OptionMenu
                  options={[
                    'Share Connection',
                    'Block Connection',
                    { divider: true },
                    { text: 'Delete', menuItemProps: { className: commonStyles.errorColor } }
                  ]}
                  iconButtonProps={{ size: 'small', className: `absolute top-5 right-5 ${commonStyles.textDisabled}` }}
                />
                <CardContent className='flex items-center flex-col gap-6'>
                  <Avatar src={item.avatar} className='mbs-2 bs-[100px] is-[100px]' />
                  <div className='flex flex-col items-center'>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography color='text.secondary'>{item.designation}</Typography>
                  </div>
                  <div className='flex items-center gap-4'>
                    {item.chips.map((chip, index) => (
                      <Link key={index}>
                        <Chip variant='tonal' label={chip.title} color={chip.color} size='small' />
                      </Link>
                    ))}
                  </div>
                  <div className='flex w-full items-center justify-around flex-wrap'>
                    <div className='flex items-center flex-col'>
                      <Typography variant='h5'>{item.projects}</Typography>
                      <Typography color='text.secondary'>Projects</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography variant='h5'>{item.tasks}</Typography>
                      <Typography color='text.secondary'>Tasks</Typography>
                    </div>
                    <div className='flex items-center flex-col'>
                      <Typography variant='h5'>{item.connections}</Typography>
                      <Typography color='text.secondary'>Connections</Typography>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Button
                      variant={item.isConnected ? 'contained' : 'outlined'}
                      startIcon={<i className={item.isConnected ? 'ri-user-follow-line' : 'ri-user-add-line'} />}
                    >
                      {item.isConnected ? 'Connected' : 'Connect'}
                    </Button>
                    <Button variant='outlined' color='secondary' className='bs-[38px] is-[38px] min-w-0 p-1.5'>
                      <i className='ri-mail-open-line' />
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
