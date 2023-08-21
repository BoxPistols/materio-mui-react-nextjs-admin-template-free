'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Component Imports
import ReactApexcharts from '../../../components/charts/apexchart'

const candlestickColors = {
  series1: '#28c76f',
  series2: '#ea5455'
}

const series = [
  {
    data: [
      {
        x: `7/12/${new Date().getFullYear()}`,
        y: [150, 170, 50, 100]
      },
      {
        x: `8/12/${new Date().getFullYear()}`,
        y: [200, 400, 170, 330]
      },
      {
        x: `9/12/${new Date().getFullYear()}`,
        y: [330, 340, 250, 280]
      },
      {
        x: `10/12/${new Date().getFullYear()}`,
        y: [300, 330, 200, 320]
      },
      {
        x: `11/12/${new Date().getFullYear()}`,
        y: [320, 450, 280, 350]
      },
      {
        x: `12/12/${new Date().getFullYear()}`,
        y: [300, 350, 80, 250]
      },
      {
        x: `13/12/${new Date().getFullYear()}`,
        y: [200, 330, 170, 300]
      },
      {
        x: `14/12/${new Date().getFullYear()}`,
        y: [200, 220, 70, 130]
      },
      {
        x: `15/12/${new Date().getFullYear()}`,
        y: [220, 270, 180, 250]
      },
      {
        x: `16/12/${new Date().getFullYear()}`,
        y: [200, 250, 80, 100]
      },
      {
        x: `17/12/${new Date().getFullYear()}`,
        y: [150, 170, 50, 120]
      },
      {
        x: `18/12/${new Date().getFullYear()}`,
        y: [110, 450, 10, 420]
      },
      {
        x: `19/12/${new Date().getFullYear()}`,
        y: [400, 480, 300, 320]
      },
      {
        x: `20/12/${new Date().getFullYear()}`,
        y: [380, 480, 350, 450]
      }
    ]
  }
]

const ApexCandlestickChart = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: { columnWidth: '40%' },
      candlestick: {
        colors: {
          upward: candlestickColors.series1,
          downward: candlestickColors.series2
        }
      }
    },
    grid: {
      padding: { top: -10 },
      borderColor: theme.palette.divider,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      tooltip: { enabled: true },
      crosshairs: {
        stroke: { color: theme.palette.divider }
      },
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: { show: false },
      axisTicks: { color: theme.palette.divider },
      crosshairs: {
        stroke: { color: theme.palette.divider }
      },
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Stocks Prices'
        subheader='$50,863.98'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <ReactApexcharts type='candlestick' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexCandlestickChart