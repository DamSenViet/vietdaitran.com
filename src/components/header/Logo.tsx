import { Box } from '@mui/material'
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
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            fontWeight: 500,
          }}
        >
          Viet Tran
        </Typography>
      )}
    </Box>
  )
}
