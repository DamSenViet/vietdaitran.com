import { Shadows, createTheme } from '@mui/material'
import { primary, secondary } from './palette'

export const defaultLightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default createTheme({
  palette: {
    mode: 'light',
    primary,
    secondary,
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  shadows: defaultLightTheme.shadows.map(() => 'none') as Shadows,
})
