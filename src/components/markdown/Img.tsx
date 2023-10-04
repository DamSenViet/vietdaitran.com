import React, { ComponentProps } from 'react'
import Zoom from 'react-medium-image-zoom'
import { styled, useTheme, Box, GlobalStyles } from '@mui/material'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'
import { transparentize } from 'color2k'

const StyledImage = styled('img')({})

interface CustomZoomProps {
  children: React.ReactNode
}

function CustomZoom({ children }: CustomZoomProps) {
  const theme = useTheme()
  return (
    <>
      <GlobalStyles
        styles={{
          "[data-rmiz-portal] [data-rmiz-modal-overlay='visible']": {
            backgroundColor: transparentize(
              theme.palette.background.default,
              0.4
            ),
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      <Zoom
        IconUnzoom={() => <AiOutlineZoomOut size={22} />}
        IconZoom={() => <AiOutlineZoomIn size={22} />}
        wrapElement="div"
        ZoomContent={({ img, buttonUnzoom, onUnzoom }) => {
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
        }}
      >
        {children}
      </Zoom>
    </>
  )
}

export default function Img({ ...props }: ComponentProps<'img'>) {
  return (
    <CustomZoom>
      <StyledImage
        sx={{
          maxWidth: '100%',
          maxHeight: '400px',
        }}
        {...props}
      />
    </CustomZoom>
  )
}
