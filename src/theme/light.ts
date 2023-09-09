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
      main: 'hsla(0, 0%, 100%, .5)',
      contrastText: 'hsla(172, 95%, 18%, 1)',
    },
    secondary,
    background: {
      default: '#ece7df',
      paper: '#f6f2ee',
    },
    text: {
      primary: '#025a4e',
      secondary: '#4c6763',
      disabled: 'rgba(0, 0, 0, 0.08)',
    },
  },
  shadows: defaultLightTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
