import React, { ComponentProps } from 'react'
import { TableCell, TableCellProps } from '@mui/material'

export default function Td({ children, align }: ComponentProps<'td'>) {
  return (
    <TableCell
      align={
        ['inherit', 'left', 'center', 'right', 'justify'].includes(align!)
          ? (align as TableCellProps['align'])
          : 'inherit'
      }
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
