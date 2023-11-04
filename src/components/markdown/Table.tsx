import React, { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import {
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from '@mui/material'
import useMovingFade from '@/hooks/useMovingFade'

export default function Table({ children }: ComponentProps<'table'>) {
  return (
    <MuiTableContainer component={motion.div} {...useMovingFade()}>
      <MuiTable
        sx={(theme) => ({
          width: 'auto',
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.text.disabled}`,
          borderCollapse: 'separate',
          borderRadius: 2,
        })}
      >
        {children}
      </MuiTable>
    </MuiTableContainer>
  )
}
