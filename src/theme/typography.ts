import { TypographyOptions } from '@mui/material/styles/createTypography'
import { manrope } from './fonts'

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
  },
  h3: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '2.375rem',
    letterSpacing: -0.5,
  },
  h4: {
    fontFamily: manrope.style.fontFamily,
    fontWeight: 500,
    fontSize: '1.875rem',
    letterSpacing: -0.5,
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
