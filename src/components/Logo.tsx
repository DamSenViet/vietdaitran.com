import { Box } from '@mui/material'
import { permanent_marker } from '@/theme/fonts'
import Image from 'next/image'
import profile from '@/assets/2023 Profile.jpg'

export interface LogoProps {
  image?: boolean
}

export default function Logo(props: LogoProps) {
  return (
    <Box
      component={'span'}
      sx={(theme) => ({
        height: 56,
        width: 56,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: theme.palette.text.primary,
        fontFamily: permanent_marker.style.fontFamily,
        fontSize: '1.3rem',
        color: theme.palette.background.default,
      })}
    >
      {props.image ? (
        <Image
          src={profile}
          width={56}
          height={56}
          alt="Profile picture"
          style={{ borderRadius: 100, border: '3px solid white' }}
        />
      ) : (
        'VT'
      )}
    </Box>
  )
}
