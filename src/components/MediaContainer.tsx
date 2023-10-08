import React from 'react'
import { Box } from '@mui/material'
import withDefaultProps from '@/utils/withDefaultProps'

const MediaContainer = withDefaultProps(Box, {
  sx: {
    position: 'relative',
    display: 'grid',
    justifyContent: 'center',
    top: 0,
    left: 0,
    marginX: {
      md: 12,
    },
    marginY: 2,
  },
})

export default MediaContainer
