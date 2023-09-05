import { Shadows, createTheme } from '@mui/material'
import { primary, secondary } from './palette'
import typography from './typography'

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
      default: '#ffffff',
      paper: '#ffffff',
      // paper: '#fafafa',
    },
  },
  shadows: defaultLightTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
