import React from 'react'
import { Box, Stack } from '@mui/material'
import AppFooter from './footer/AppFooter'
import containerSx from './constants/containerSx'

export interface AppMainProps {
  children?: React.ReactNode
}

export default function AppMain({ children }: AppMainProps) {
  return (
    <Stack
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        ...containerSx,
        borderRight: {
          xs: 'initial',
          md: `1px solid ${theme.palette.text.disabled}`,
        },
        borderLeft: {
          xs: 'initial',
          md: `1px solid ${theme.palette.text.disabled}`,
        },
        marginX: 'auto',
      })}
    >
      <Stack component={'main'}>
        <Box sx={{ height: 'var(--header-height)' }} />
        {children}
      </Stack>
      <AppFooter></AppFooter>
    </Stack>
  )
}
