import React, { ComponentProps } from 'react'
import { TableRow } from '@mui/material'

export default function Tr({ children }: ComponentProps<'tr'>) {
  return (
    <TableRow
      sx={(theme) => ({
        '&:last-child > td': {
          borderBottom: `1px solid transparent`,
        },
      })}
    >
      {children}
    </TableRow>
  )
}
