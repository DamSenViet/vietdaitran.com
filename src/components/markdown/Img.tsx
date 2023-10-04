import React, { ComponentProps } from 'react'
import Zoom from '../Zoom'
import { styled } from '@mui/material'

const StyledImage = styled('img')({})

/**
 * If we don't set width or height props, we limit the potential size of the image.
 */
export default function Img({ ...props }: ComponentProps<typeof StyledImage>) {
  const hasSetDims = React.useMemo(
    () => props?.width || props?.height,
    [props.width, props.height]
  )

  const propsWithSx = React.useMemo(
    () =>
      hasSetDims
        ? {}
        : {
            sx: {
              maxWidth: '100%',
              maxHeight: '400px',
            },
          },
    [hasSetDims]
  )
  return (
    // may be part of a carousel will need 100% width set by default
    <Zoom>
      <StyledImage {...props} {...propsWithSx} />
    </Zoom>
  )
}
