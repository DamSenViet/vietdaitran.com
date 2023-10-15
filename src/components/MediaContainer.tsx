import { Box } from '@mui/material'
import withDefaultProps from '@/utils/withDefaultProps'

const MediaContainer = withDefaultProps(Box, {
  sx: {
    position: 'relative',
    display: 'grid',
    justifyContent: 'stretch',
    justifyItems: 'center',
    width: '100%',
    top: 0,
    left: 0,
    paddingX: {
      md: 12,
    },
    marginY: 2,
  },
})

export default MediaContainer
