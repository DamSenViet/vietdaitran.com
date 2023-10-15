import React, { ComponentProps } from 'react'
import {
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from '@mui/material'

export default function Table({ children }: ComponentProps<'table'>) {
  return (
    <MuiTableContainer>
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
