'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import OptionsMenu from '@core/components/option-menu'
import AppReactApexCharts from '@/libs/styles/AppReactApexCharts'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

const TotalSales = () => {
  //  Hook
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.2,
        opacityFrom: 1,
        shadeIntensity: 0,
        type: 'horizontal',
        stops: [0, 100, 100]
      }
    },
    stroke: {
      width: 6,
      curve: 'smooth',
      lineCap: 'round'
    },
    legend: { show: false },
    colors: [theme.palette.success.main],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -10
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          fontSize: '0.9375rem',
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)
        }
      }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Sales'
        subheader='$21,845'
        subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.primary} !important` } }}
        className='pbe-0'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <AppReactApexCharts
          type='line'
          height={239}
          width='100%'
          options={options}
          series={[{ name: 'Total Sales', data: [0, 258, 30, 240, 150, 400] }]}
        />
      </CardContent>
    </Card>
  )
}

export default TotalSales
