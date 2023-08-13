import { Shadows, createTheme } from '@mui/material'
import { primary, secondary } from './palette'

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
      default: '#000000',
      paper: '#222222',
    },
  },
  shadows: defaultDarkTheme.shadows.map(() => 'none') as Shadows,
})
