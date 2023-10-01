import React, { ComponentProps } from 'react'
import { Box } from '@mui/material'

export default function BlockQuote({ children }: ComponentProps<'blockquote'>) {
  return (
    <Box
      component={'blockquote'}
      sx={(theme) => ({
        marginX: 1,
        marginY: 1,
        paddingLeft: 2,
        paddingRight: 1,
        paddingTop: 2,
        paddingBottom: 0.1,
        backgroundColor: `${theme.palette.action.disabledBackground}`,
        borderLeft: `${theme.spacing(1)} solid ${theme.palette.action.hover}`,
      })}
    >
      {children}
    </Box>
  )
}
