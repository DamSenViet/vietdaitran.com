import React, { ComponentProps } from 'react'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'

export default function P({ children }: ComponentProps<'p'>) {
  return (
    <Typography
      component={motion.p}
      variant={'body1'}
      color="text.secondary"
      sx={{
        lineHeight: 1.7,
      }}
    >
      {children}
    </Typography>
  )
}
