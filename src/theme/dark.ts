import { Shadows, createTheme } from '@mui/material'
import { secondary } from './palette'
import typography from './typography'

export const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1C1C1C',
      contrastText: '#ffffff',
    },
    secondary,
    background: {
      default: '#080808',
      paper: '#080808',
    },
    text: {
      secondary: '#8e8e8e',
      disabled: '#212121',
    },
  },
  breakpoints: {
    values: {
      ...defaultDarkTheme.breakpoints.values,
      xl: 1043,
    },
  },
  shadows: defaultDarkTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
