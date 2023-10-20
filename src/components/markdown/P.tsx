import React, { ComponentProps } from 'react'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export default function P({ children }: ComponentProps<'p'>) {
  return (
    <Typography
      component={motion.p}
      {...useMovingFade({ amount: 1 })}
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
