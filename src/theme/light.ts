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
      default: '#ece7df',
      paper: '#f6f2ee',
    },
    text: {
      primary: '#025a4e',
      secondary: '#4c6763',
    },
  },
  shadows: defaultLightTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
