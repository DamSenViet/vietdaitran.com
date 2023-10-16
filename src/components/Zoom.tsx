import React from 'react'
import BaseZoom from 'react-medium-image-zoom'
import { useTheme, Box, GlobalStyles } from '@mui/material'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'
import { transparentize } from 'color2k'
import withDefaultProps from '@/utils/withDefaultProps'

interface CustomZoomProps {
  children: React.ReactNode
}

const ZoomWithDefaults = withDefaultProps(BaseZoom, {
  IconUnzoom: () => <AiOutlineZoomOut size={22} />,
  IconZoom: () => <AiOutlineZoomIn size={22} />,
  wrapElement: 'div',
  ZoomContent: ({ img, buttonUnzoom, onUnzoom }) => {
    return (
      <Box
        onClick={onUnzoom}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {buttonUnzoom}
        {img}
      </Box>
    )
  },
})

export default function Zoom({ children }: CustomZoomProps) {
  const theme = useTheme()
  return (
    <>
      <GlobalStyles
        styles={{
          "[data-rmiz-portal] [data-rmiz-modal-overlay='visible']": {
            background: transparentize(
              theme.palette.background.default,
              theme.palette.mode === 'light' ? 0.2 : 0.1
            ),
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      <ZoomWithDefaults>{children}</ZoomWithDefaults>
    </>
  )
}
