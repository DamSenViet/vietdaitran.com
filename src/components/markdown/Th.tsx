import React, { ComponentProps } from 'react'
import { TableCell } from '@mui/material'

export default function Th({ children }: ComponentProps<'th'>) {
  return (
    <TableCell
      sx={(theme) => ({
        fontWeight: 700,
        color: 'text.secondary',
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      {children}
    </TableCell>
  )
}
