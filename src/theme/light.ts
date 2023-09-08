import { Shadows, createTheme } from '@mui/material'
import { secondary } from './palette'
import typography from './typography'

export const defaultLightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f6f6f6',
      contrastText: '#000000',
    },
    secondary,
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.875)',
      secondary: 'rgba(54, 54, 54, 0.75)',
      disabled: 'rgba(0, 0, 0, 0.08)',
    },
  },
  shadows: defaultLightTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
