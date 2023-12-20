'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

const ResetPasswordV2 = ({ direction }: { direction: Direction }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  return (
    <div className='flex h-full justify-center'>
      <div className='flex h-full items-center justify-center flex-1 max-md:hidden'>image</div>
      <div className='flex justify-center items-center h-full is-[480px]'>
        <div>
          <div className='absolute block-start-[33px] inline-start-[38px]'>Logo</div>
          <Typography>Reset Password 🔒</Typography>
          <Typography>Your new password must be different from previously used passwords</Typography>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField
              autoFocus
              fullWidth
              label='Password'
              type={isPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              label='Confirm Password'
              type={isConfirmPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <i className={isConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button fullWidth variant='contained' type='submit'>
              Set New Password
            </Button>
            <Typography className='flex justify-center items-center' color='primary'>
              <Link href='/pages/auth/login-v2' onClick={e => e.preventDefault()} className='flex items-center'>
                <i className={direction === 'rtl' ? 'ri-arrow-right-s-line' : 'ri-arrow-left-s-line'} />
                <span>Back to Login</span>
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordV2
