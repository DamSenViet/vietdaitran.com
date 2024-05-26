import NextLink from 'next/link'
import { Box, Link } from '@mui/material'
import { Typography } from '@mui/material'

export default function Logo() {
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
        <Typography component={'span'} color="text.primary" variant="subtitle1">
          Viet Tran
        </Typography>
      </Link>
    </Box>
  )
}
