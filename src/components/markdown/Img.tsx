import React, { ComponentProps } from 'react'
import { styled } from '@mui/material'

const StyledImage = styled('img')({})

export default function Img({ ...props }: ComponentProps<'img'>) {
  return (
    <StyledImage
      sx={{
        maxWidth: '100%',
        maxHeight: '400px',
      }}
      {...props}
    />
  )
}
