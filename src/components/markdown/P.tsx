import React, { ComponentProps } from 'react'
import { Typography } from '@mui/material'

export default function P({ children }: ComponentProps<'p'>) {
  return (
    <Typography
      component={'p'}
      variant={'body1'}
      color="text.secondary"
      sx={{
        textAlign: 'justify',
        textAlignLast: 'left',
        lineHeight: 1.6,
        marginBottom: 2,
      }}
    >
      {children}
    </Typography>
  )
}
