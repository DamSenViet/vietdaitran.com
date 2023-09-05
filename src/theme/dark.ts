import { Shadows, createTheme } from '@mui/material'
import { primary, secondary } from './palette'
import typography from './typography'

export const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default createTheme({
  palette: {
    mode: 'dark',
    primary,
    secondary,
    background: {
      default: '#111111',
      // default: '#1a1a1a',
      paper: '#111111',
      // paper: '#242424',
    },
  },
  shadows: defaultDarkTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
