// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import commonStyles from '@/styles/common.module.css'

// Type Imports
import type { ProfileTeamsType, ProfileCommonType, ProfileTabType } from '@/types/pages/profileTypes'

const renderList = (list: ProfileCommonType[]) => {
  return (
    list.length > 0 &&
    list.map((item, index) => {
      return (
        <div key={index} className='flex items-center gap-2'>
          <i className={classnames(item.icon, commonStyles.textSecondary)} />
          <div className='flex items-center flex-wrap gap-2'>
            <Typography className='font-medium' color='text.secondary'>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography className={commonStyles.textSecondary}>
              {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
            </Typography>
          </div>
        </div>
      )
    })
  )
}

const renderTeams = (teams: ProfileTeamsType[]) => {
  return (
    teams.length > 0 &&
    teams.map((item, index) => {
      return (
        <div key={index} className='flex items-center flex-wrap gap-2'>
          <Typography className='font-medium' color='text.secondary'>
            {item.property.charAt(0).toUpperCase() + item.property.slice(1)}
          </Typography>
          <Typography className={commonStyles.textSecondary}>
            {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
          </Typography>
        </div>
      )
    })
  )
}

const AboutOverview = ({ data }: { data?: ProfileTabType }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <Typography variant='caption' color='text.disabled' className='uppercase'>
                About
              </Typography>
              {data?.about && renderList(data?.about)}
            </div>
            <div className='flex flex-col gap-4'>
              <Typography variant='caption' color='text.disabled' className='uppercase'>
                Contacts
              </Typography>
              {data?.contacts && renderList(data?.contacts)}
            </div>
            <div className='flex flex-col gap-4'>
              <Typography variant='caption' color='text.disabled' className='uppercase'>
                Teams
              </Typography>
              {data?.teams && renderTeams(data?.teams)}
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <div className='flex flex-col gap-4'>
              <Typography variant='caption' color='text.disabled' className='uppercase'>
                Overview
              </Typography>
              {data?.overview && renderList(data?.overview)}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutOverview
