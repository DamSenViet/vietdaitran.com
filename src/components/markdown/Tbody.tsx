import React, { ComponentProps } from 'react'
import { TableBody } from '@mui/material'

export default function Tbody({ children }: ComponentProps<'tbody'>) {
  return <TableBody>{children}</TableBody>
}
