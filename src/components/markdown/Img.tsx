import React, { ComponentProps } from 'react'
import Zoom from '../Zoom'
import { styled } from '@mui/material'

const StyledImage = styled('img')({})

export default function Img({ ...props }: ComponentProps<'img'>) {
  // whether coming directly from markdown
  const isDefaultConstrained = React.useMemo(
    () => !props?.width && !props?.height,
    [props.width, props.height]
  )

  const propsWithSx = React.useMemo(
    () =>
      isDefaultConstrained
        ? {
            sx: {
              maxWidth: '100%',
              maxHeight: '400px',
            },
          }
        : {},
    [isDefaultConstrained]
  )
  return (
    // may be part of a carousel will need 100% width set by default
    <Zoom>
      <StyledImage {...propsWithSx} {...props} />
    </Zoom>
  )
}
