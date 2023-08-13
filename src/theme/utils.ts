import { Theme } from '@mui/material'

export const byMode = <T>(theme: Theme, light: T, dark: T): T =>
  theme.palette.mode === 'dark' ? dark : light
