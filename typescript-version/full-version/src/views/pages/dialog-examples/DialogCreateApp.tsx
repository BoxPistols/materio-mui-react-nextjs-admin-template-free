'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Component Imports
import CreateApp from '@components/dialogs/create-app'

const DialogCreateApp = () => {
  // States
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card>
        <CardContent className='flex flex-col items-center text-center gap-4'>
          <i className='mdi-cube-outline text-[32px]' />
          <Typography>Create App</Typography>
          <Typography>
            Provide application data with this form to create the app dialog popup example, easy to use in any page.
          </Typography>
          <Button variant='contained' onClick={() => setOpen(true)}>
            Show
          </Button>
        </CardContent>
        <CreateApp open={open} setOpen={setOpen} />
      </Card>
    </>
  )
}

export default DialogCreateApp
