import { createTheme } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { manrope } from './fonts'

// we'll use this to construct responsive typography
const theme = createTheme()

export default {
  fontFamily: manrope.style.fontFamily,
  h1: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '5rem',
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    letterSpacing: -0.5,
    fontSize: '3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.75rem',
    },
  },
  h3: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '2.25rem',
    letterSpacing: -0.5,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.375rem',
    },
  },
  h4: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.75rem',
    letterSpacing: -0.5,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
    },
  },
  h5: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    letterSpacing: -0.5,
  },
  h6: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    letterSpacing: -0.5,
  },
  subtitle1: {
    fontFamily: manrope.style.fontFamily,
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 'normal',
  },
  subtitle2: {
    fontFamily: manrope.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  body1: {
    fontFamily: manrope.style.fontFamily,
  },
  body2: {
    fontFamily: manrope.style.fontFamily,
  },
  button: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 400,
    textTransform: 'none',
  },
  caption: {
    fontFamily: manrope.style.fontFamily,
  },
  overline: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: '1rem',
  },
  allVariants: {
    scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 72px)',
  },
} as TypographyOptions
