import { TypographyOptions } from '@mui/material/styles/createTypography'
import { manrope } from './fonts'
import { defaultLightTheme } from './base'

export default {
  htmlFontSize: 16, // base rem
  fontFamily: manrope.style.fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: manrope.style.fontFamily,
    fontSize: '3rem',
    fontWeight: 500,
    letterSpacing: -1.5,
    [defaultLightTheme.breakpoints.up('md')]: {
      fontSize: '3.75rem',
    },
  },
  h2: {
    fontFamily: manrope.style.fontFamily,
    fontSize: '2.25rem',
    fontWeight: 500,
    letterSpacing: -0.5,
    [defaultLightTheme.breakpoints.up('md')]: {
      fontSize: '2.375rem',
    },
  },
  h3: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.75rem',
    letterSpacing: -0.5,
    [defaultLightTheme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
    },
  },
  h4: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.5rem',
    letterSpacing: -0.5,
  },
  h5: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.25rem',
    letterSpacing: -0.5,
  },
  h6: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.125rem',
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
} satisfies TypographyOptions as TypographyOptions
