import React from 'react'
import { Stack } from '@mui/material'
import AppFooter from './footer/AppFooter'
import containerSx from './constants/containerSx'

export interface AppMainProps {
  children?: React.ReactNode
  omitFooter?: boolean
}

export default function AppMain({
  children,
  omitFooter = false,
}: AppMainProps) {
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
      <Stack component={'main'}>{children}</Stack>
      {!omitFooter && <AppFooter />}
    </Stack>
  )
}
