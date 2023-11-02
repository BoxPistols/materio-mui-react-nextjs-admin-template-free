// React Imports
import React from 'react'

// MUI Imports
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import LinearProgress from '@mui/material/LinearProgress'
import type { ListProps } from '@mui/material/List'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import CustomAvatar from '@docComponents/mui/Avatar'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

type CourseListType = {
  description?: string
  progress?: number
  variant?: ThemeColor
  icon?: string
}

const courseList: CourseListType[] = [
  {
    description: 'React is a JavaScript library for building user interfaces',
    progress: 90,
    variant: 'info',
    icon: 'ri-reactjs-fill'
  },
  {
    description: 'Bootstrap is an open source toolkit',
    progress: 75,
    variant: 'primary',
    icon: 'ri-bootstrap-fill'
  },
  {
    description: 'Vue.js is the Progressive JavaScript Framework',
    progress: 85,
    variant: 'success',
    icon: 'ri-vuejs-fill'
  },
  {
    description: 'Angular implements Functional Programming concepts',
    progress: 60,
    variant: 'error',
    icon: 'ri-angularjs-fill'
  },
  {
    description: 'JavaScript is the programming language of the Web',
    progress: 70,
    variant: 'warning',
    icon: 'ri-javascript-fill'
  }
]

const ListProgress = () => {
  return (
    <StyledList>
      {courseList.map((course, index) => {
        return (
          <ListItem key={index}>
            <ListItemAvatar className='flex gap-5 items-center w-full'>
              <CustomAvatar skin='light' color={course.variant} variant='rounded' className='w-9 h-9'>
                <i className={course.icon} />
              </CustomAvatar>
              <div className='w-full'>
                <ListItemText primary={course.description}></ListItemText>
                <LinearProgress value={course.progress} variant='determinate' color={course.variant} />
              </div>
            </ListItemAvatar>
          </ListItem>
        )
      })}
    </StyledList>
  )
}

export default ListProgress