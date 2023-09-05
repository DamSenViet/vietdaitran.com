import { TypographyOptions } from '@mui/material/styles/createTypography'
import { poppins, righteous } from './fonts'

export default {
  fontFamily: poppins.style.fontFamily,
  h1: {
    fontFamily: poppins.style.fontFamily,
    fontWeight: 400,
  },
  h2: {
    fontFamily: poppins.style.fontFamily,
    fontWeight: 500,
  },
  h3: {
    fontFamily: poppins.style.fontFamily,
  },
  h4: {
    fontFamily: poppins.style.fontFamily,
  },
  h5: {
    fontFamily: poppins.style.fontFamily,
  },
  h6: {
    fontFamily: poppins.style.fontFamily,
  },
  subtitle1: {
    fontFamily: poppins.style.fontFamily,
  },
  subtitle2: {
    fontFamily: poppins.style.fontFamily,
  },
  body1: {
    fontFamily: poppins.style.fontFamily,
  },
  body2: {
    fontFamily: poppins.style.fontFamily,
  },
  button: {
    fontFamily: poppins.style.fontFamily,
    fontWeight: 400,
    textTransform: 'none',
  },
  caption: {
    fontFamily: poppins.style.fontFamily,
  },
  overline: {
    fontFamily: poppins.style.fontFamily,
    fontWeight: 400,
    textTransform: 'none',
    fontSize: '1rem',
  },
  allVariants: {
    scrollMarginTop: 'calc(var(--MuiDocs-header-height) + 72px)',
  },
} as TypographyOptions
