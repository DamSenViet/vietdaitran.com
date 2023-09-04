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
      default: '#233831',
      paper: '#8fdcc20d',
    },
    text: {
      primary: '#8fdcc2',
      secondary: '#d4ede4',
    },
  },
  shadows: defaultDarkTheme.shadows.map(() => 'none') as Shadows,
  typography,
})
