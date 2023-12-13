'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import classnames from 'classnames'
import type { ApexOptions } from 'apexcharts'

// Component Imports
import OptionsMenu from '@core/components/option-menu'
import ReactApexcharts from '@components/charts/apexchart'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Style Import
import commonStyles from '@/styles/common.module.css'

const TotalRevenue = () => {
  // Hooks
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const textSecondaryColor = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)
  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Returning', 'New Users', 'Referrals'],
    legend: { show: false },
    stroke: { lineCap: 'round' },
    colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.warning.main],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '40%'
        },
        track: {
          margin: 10,
          background: 'transparent'
        },
        dataLabels: {
          name: {
            offsetY: 28,
            fontSize: '0.75rem',
            color: textSecondaryColor
          },
          value: {
            offsetY: -12,
            fontWeight: 500,
            fontSize: '2.125rem',
            color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`),
            formatter(value) {
              return `${value}k`
            }
          },
          total: {
            show: true,
            fontWeight: 400,
            fontSize: '0.75rem',
            color: textSecondaryColor,
            label: `${new Date().getFullYear()}`,
            formatter(value) {
              return `${value.globals.seriesTotals.reduce((total: number, num: number) => total + num)}k`
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Revenue'
        action={
          <OptionsMenu options={['Last 28 Days', 'Last Month', 'Last Year']} iconClassName={commonStyles.textPrimary} />
        }
      />
      <CardContent>
        <ReactApexcharts type='radialBar' height={250} series={[71, 78, 86]} options={options} />
        <div className='flex justify-around'>
          <div className='flex items-center flex-col justify-center gap-1'>
            <div className='flex items-center justify-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.successColor)} />
              <Typography className='font-medium' color='text.primary'>
                856
              </Typography>
            </div>
            <Typography>New User</Typography>
          </div>
          <Divider orientation='vertical' className='h-auto' />
          <div className='flex items-center flex-col justify-center gap-1'>
            <div className='flex items-center justify-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.primaryColor)} />
              <Typography className='font-medium' color='text.primary'>
                345
              </Typography>
            </div>
            <Typography>Returning</Typography>
          </div>
          <Divider orientation='vertical' className='h-auto' />
          <div className='flex items-center flex-col justify-center gap-1'>
            <div className='flex items-center justify-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.warningColor)} />
              <Typography className='font-medium' color='text.primary'>
                258
              </Typography>
            </div>
            <Typography>Referrals</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalRevenue
