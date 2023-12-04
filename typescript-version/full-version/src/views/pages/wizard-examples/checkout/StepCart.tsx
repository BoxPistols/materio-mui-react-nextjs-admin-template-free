// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import useMediaQuery from '@mui/material/useMediaQuery'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

const products = [
  {
    imgSrc: '/images/pages/google-home.png',
    imgAlt: 'Google Home',
    productName: 'Google - Google Home - White',
    soldBy: 'Google',
    inStock: true,
    rating: 4,
    count: 1,
    price: 299,
    originalPrice: 359
  },
  {
    imgSrc: '/images/pages/iPhone-11.png',
    imgAlt: 'Apple iPhone',
    productName: 'Apple iPhone 11 (64GB, Black)',
    soldBy: 'Apple',
    inStock: true,
    rating: 4,
    count: 1,
    price: 899,
    originalPrice: 999
  }
]

const StepCart = ({ handleNext, direction }: { handleNext: () => void; direction: Direction }) => {
  // States
  const [openCollapse, setOpenCollapse] = useState<boolean>(true)
  const [openFade, setOpenFade] = useState<boolean>(true)

  // Hooks
  const isBetweenSmAndLg = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'lg'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  useEffect(() => {
    if (!openFade) {
      setTimeout(() => {
        setOpenCollapse(false)
      }, 300)
    }
  }, [openFade])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} className='flex flex-col gap-4'>
        <Collapse in={openCollapse}>
          <Fade in={openFade} timeout={{ exit: 300 }}>
            <Alert
              icon={<i className='ri-percent-line' />}
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpenFade(false)
                  }}
                >
                  <i className='ri-close-line' />
                </IconButton>
              }
            >
              <AlertTitle>Available Offers</AlertTitle>
              <Typography variant='body2'>
                - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
              </Typography>
              <Typography variant='body2'>
                - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
              </Typography>
            </Alert>
          </Fade>
        </Collapse>
        <Typography className={classnames(commonStyles.border, commonStyles.borderRadius)} variant='h6'>
          My Shopping BaTypography)
        </Typography>
        <div className={styles.border}>
          {products.map((product, index) => (
            <div
              key={index}
              className={classnames('flex items-center relative p-5 gap-4', styles.borderBottom, {
                'flex-col': isBelowSmScreen
              })}
            >
              <img height={140} width={140} src={product.imgSrc} alt={product.imgAlt} />
              <IconButton size='small' className={styles.closeIcon}>
                <i className='ri-close-line text-lg' />
              </IconButton>
              <div
                className={classnames('flex justify-between w-full', {
                  'flex-col items-center': isBelowSmScreen
                })}
              >
                <div className={classnames('flex flex-col gap-2', { 'items-center': isBelowSmScreen })}>
                  <Typography>{product.productName}</Typography>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <Typography color='text.disabled'>Sold By:</Typography>
                      <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='text.primary'>
                        {product.soldBy}
                      </Typography>
                    </div>
                    {product.inStock ? (
                      <Chip size='small' variant='tonal' color='success' label='In Stock' />
                    ) : (
                      <Chip size='small' variant='tonal' color='error' label='Out of Stock' />
                    )}
                  </div>
                  <Rating name='google-nest-rating' value={product.rating} readOnly />
                  <TextField
                    size='small'
                    type='number'
                    defaultValue={product.count}
                    className={classnames('block', styles.maxWidth)}
                  />
                </div>
                <div
                  className={classnames('flex flex-col justify-between items-end mt-4 gap-1', {
                    'items-center': isBelowSmScreen
                  })}
                >
                  <div className='flex'>
                    <Typography color='text.primary'>{`$${product.price}`}</Typography>
                    <Typography
                      className='line-through'
                      color='text.secondary'
                    >{`/$${product.originalPrice}`}</Typography>
                  </div>
                  <Button variant='outlined' size='small'>
                    Move to wishlist
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Typography
          href='/'
          component={Link}
          onClick={e => e.preventDefault()}
          className={classnames(
            'flex items-center justify-between gap-4 plb-2 pli-5',
            commonStyles.border,
            commonStyles.borderRadius
          )}
          color='text.primary'
        >
          Add more products from wishlist
          <i className={direction === 'rtl' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'} />
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} className='flex flex-col gap-2'>
        <div className={classnames(commonStyles.border, commonStyles.borderRadius)}>
          <CardContent className='flex flex-col gap-4'>
            <Typography className='font-medium'>Offer</Typography>
            <div className='flex gap-4'>
              <TextField fullWidth size='small' placeholder='Enter Promo Code' />
              <Button variant='outlined' className='normal-case'>
                Apply
              </Button>
            </div>
            <div
              className={classnames(
                commonStyles.actionHoverColor,
                commonStyles.borderRadius,
                'flex flex-col gap-2 p-5'
              )}
            >
              <Typography className='font-medium'>Buying gift for a loved one?</Typography>
              <Typography variant='body2'>Gift wrap and personalized message on card, Only for $2.</Typography>
              <Typography
                variant='body2'
                href='/'
                component={Link}
                onClick={e => e.preventDefault()}
                color='text.primary'
                className='font-medium'
              >
                Add a gift wrap
              </Typography>
            </div>
          </CardContent>
          <Divider />
          <CardContent className='flex gap-4 flex-col'>
            <Typography className='font-medium'>Price Details</Typography>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography variant='body2' className={commonStyles.textPrimary}>
                  Bag Total
                </Typography>
                <Typography variant='body2'>$1198.00</Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography variant='body2' className={commonStyles.textPrimary}>
                  Coup Discount
                </Typography>
                <Typography
                  variant='body2'
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  className='font-medium'
                  color='text.primary'
                >
                  Apply Coupon
                </Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography variant='body2' className={commonStyles.textPrimary}>
                  Order Total
                </Typography>
                <Typography variant='body2'>$1198.00</Typography>
              </div>
              <div className='flex items-center flex-wrap justify-between'>
                <Typography variant='body2' className={commonStyles.textPrimary}>
                  Delivery Charges
                </Typography>
                <div className='flex items-center gap-2'>
                  <Typography variant='body2' className={classnames(commonStyles.textDisabled, 'line-through')}>
                    $5.00
                  </Typography>
                  <Chip variant='tonal' size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <div className='flex items-center flex-wrap justify-between'>
              <Typography className='font-medium'>Total</Typography>
              <Typography className='font-medium'>$1198.00</Typography>
            </div>
          </CardContent>
        </div>
        <div className={classnames({ 'justify-end': isBetweenSmAndLg }, 'flex')}>
          <Button fullWidth={!isBetweenSmAndLg} variant='contained' onClick={handleNext}>
            Place Order
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepCart
