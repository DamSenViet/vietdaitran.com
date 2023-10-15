import React, { ComponentProps } from 'react'
import { TableCell, TableCellProps } from '@mui/material'

export default function Th({ children, align }: ComponentProps<'th'>) {
  return (
    <TableCell
      align={
        ['inherit', 'left', 'center', 'right', 'justify'].includes(align!)
          ? (align as TableCellProps['align'])
          : 'inherit'
      }
      sx={(theme) => ({
        fontWeight: 700,
        color: 'text.secondary',
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        '&:last-child': {
          borderRightStyle: 'none',
        },
      })}
    >
      {children}
    </TableCell>
  )
}
