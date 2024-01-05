'use client'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useColorScheme, useTheme } from '@mui/material/styles'

import type { ApexOptions } from 'apexcharts'

// Components Imports
import AppReactApexCharts from '@/libs/styles/AppReactApexCharts'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

const series = [{ data: [0, 20, 5, 30, 15, 45] }]

const LineChart = () => {
  // Hooks
  const theme = useTheme()

  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'
  const primaryColor = theme.palette.primary.main

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      strokeDashArray: 6,
      borderColor: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`),
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -10,
        left: -7,
        right: 5,
        bottom: 5
      }
    },
    stroke: {
      width: 3,
      lineCap: 'butt',
      curve: 'straight'
    },
    colors: [primaryColor],
    markers: {
      size: 6,
      offsetY: 4,
      offsetX: -2,
      strokeWidth: 3,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 5.5,
          seriesIndex: 0,
          strokeColor: primaryColor,
          fillColor: theme.palette.background.paper,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>$86.4k</Typography>
        <AppReactApexCharts type='line' height={88} width='100%' options={options} series={series} />
        <Typography color='text.primary' className='font-medium text-center'>
          Total Profit
        </Typography>
      </CardContent>
    </Card>
  )
}

export default LineChart
