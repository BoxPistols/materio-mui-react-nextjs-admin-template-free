// React Imports
import React from 'react'

// MUI Imports
import Pagination from '@mui/material/Pagination'

const PaginationSizes = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination count={10} size='small' variant='tonal' color='primary' />
      <Pagination count={10} color='primary' variant='tonal' />
      <Pagination count={10} size='large' color='primary' variant='tonal' />
    </div>
  )
}

export default PaginationSizes
