import React, { ComponentProps } from 'react'
import { TableCell } from '@mui/material'

export default function Td({ children }: ComponentProps<'td'>) {
  return (
    <TableCell
      sx={(theme) => ({
        fontWeight: 500,
        color: 'text.primary',
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      {children}
    </TableCell>
  )
}
