/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material'

const markdownTagToTypographyVariant = {
  p: 'body',
  Typography,
}

export default {
  p: (props: any) => <Typography component={'p'} variant="body1" {...props} />,
}
