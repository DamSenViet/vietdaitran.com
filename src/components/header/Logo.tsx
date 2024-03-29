import NextLink from 'next/link'
import { Box, Link } from '@mui/material'
import Image from 'next/image'
import profile from '@/assets/2023 Profile.jpg'
import { Typography } from '@mui/material'

export interface LogoProps {
  image?: boolean
}

export default function Logo(props: LogoProps) {
  return (
    <Box
      component={'span'}
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        color: theme.palette.text.primary,
      })}
    >
      <Link component={NextLink} href="/" underline="none">
        {props.image ? (
          <Image
            src={profile}
            width={56}
            height={56}
            alt="Profile picture"
            style={{ borderRadius: 100, border: '2px solid white' }}
          />
        ) : (
          <Typography
            component={'span'}
            color="text.primary"
            variant="subtitle1"
          >
            Viet Tran
          </Typography>
        )}
      </Link>
    </Box>
  )
}
