// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// Component Imports
import Link from '@components/Link'
import Form from '@components/Form'

// Styles Imports
import commonStyles from '@/styles/common.module.css'
import tableStyles from '@core/styles/table.module.css'

type TableDataType = {
  type: string
  app: boolean
  email: boolean
  browser: boolean
}

const tableData: TableDataType[] = [
  {
    app: false,
    email: false,
    browser: false,
    type: 'New for you'
  },
  {
    app: false,
    email: false,
    browser: false,
    type: 'Account activity'
  },
  {
    app: false,
    email: false,
    browser: false,
    type: 'A new browser used to sign in'
  },
  {
    app: false,
    email: false,
    browser: false,
    type: 'A new device is linked'
  }
]

const Notifications = () => {
  return (
    <Card>
      <CardHeader
        title='Recent Devices'
        subheader={
          <>
            We need permission from your browser to show notifications.
            <Link className={commonStyles.primaryColor}> Request Permission</Link>
          </>
        }
      />
      <Form>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead className={tableStyles.thead}>
              <tr>
                <th>Type</th>
                <th>Email</th>
                <th>Browser</th>
                <th>App</th>
              </tr>
            </thead>
            <tbody className={tableStyles.tbody}>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <Typography color='text.primary'>{data.type}</Typography>
                  </td>
                  <td>
                    <Checkbox defaultChecked={data.email} />
                  </td>
                  <td>
                    <Checkbox defaultChecked={data.browser} />
                  </td>
                  <td>
                    <Checkbox defaultChecked={data.app} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CardContent>
          <Typography className='mbe-6 font-medium'>When should we send you notifications?</Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Select fullWidth defaultValue='online'>
                <MenuItem value='online'>Only when I&#39;m online</MenuItem>
                <MenuItem value='anytime'>Anytime</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} className='flex gap-4 flex-wrap'>
              <Button variant='contained' type='submit'>
                Save Changes
              </Button>
              <Button variant='outlined' color='secondary' type='reset'>
                Reset
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Form>
    </Card>
  )
}

export default Notifications
