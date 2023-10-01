import React, { ComponentProps } from 'react'
import { TableHead } from '@mui/material'

export default function Thead({ children }: ComponentProps<'thead'>) {
  return <TableHead>{children}</TableHead>
}
