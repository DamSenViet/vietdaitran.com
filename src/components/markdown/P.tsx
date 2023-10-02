import React, { ComponentProps } from 'react'
import { Typography } from '@mui/material'

export default function P({ children }: ComponentProps<'p'>) {
  return (
    <Typography
      component={'p'}
      variant={'body1'}
      color="text.secondary"
      sx={{
        lineHeight: 1.7,
        marginBottom: 2,
      }}
    >
      {children}
    </Typography>
  )
}
