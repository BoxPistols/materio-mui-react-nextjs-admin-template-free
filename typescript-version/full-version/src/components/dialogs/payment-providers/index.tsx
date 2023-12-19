'use client'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

type PaymentProvidersProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type Image = {
  src: string
  alt?: string
  height?: string
  width?: string
}

type CardList = {
  images: Image[]
  providerName: string
}

const cardList: CardList[] = [
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Adyen'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: '2Checkout'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      }
    ],
    providerName: 'Airpay'
  },
  {
    images: [
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Authorize.net'
  },
  {
    images: [
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      }
    ],
    providerName: 'Bambora'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Cayan'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Chase Paymentech (Orbital)'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      }
    ],
    providerName: 'Checkout.com'
  }
]

const PaymentProviders = ({ open, setOpen }: PaymentProvidersProps) => {
  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='md' scroll='body'>
      <DialogTitle
        variant='h5'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Select Payment Providers
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          Third-party payment providers
        </Typography>
      </DialogTitle>
      <DialogContent className='pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
        <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
          <i className='ri-close-line' />
        </IconButton>
        <div>
          {cardList?.map((card, index) => (
            <div
              key={index}
              className={classnames(
                'flex sm:items-center flex-col sm:flex-row items-start justify-between flex-wrap gap-x-4 gap-y-1',
                styles.paymentItem,
                styles.borderBottom
              )}
            >
              <Typography className='font-medium'>{card.providerName}</Typography>
              <div className='flex gap-x-4 gap-y-2 flex-wrap'>
                {card.images.map((image, index) => (
                  <Avatar
                    key={index}
                    variant='rounded'
                    className={classnames(styles.avatarIcon, commonStyles.actionHoverColor)}
                  >
                    <img src={image.src} alt={image.alt} height={image.height} width={image.width} />
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PaymentProviders
