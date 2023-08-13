import React from 'react'
import { styled } from '@mui/material'

const Rect = styled('rect')(({ theme }) => ({
  fill: theme.palette.text.primary,
  transformOrigin: 'center',
  transition: '200ms',
  width: 14,
  height: 1.5,
}))

interface SvgHamburgerIconProps {
  open: boolean
}

export function SvgHamburgerIcon({ open }: SvgHamburgerIconProps) {
  return (
    <svg
      xmlns="http://ww.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Rect
        x={1}
        y={5}
        rx={1}
        sx={{
          transform: open ? 'translate(1.5px, 1.6px) rotateZ(-45deg)' : '',
        }}
      />
      <Rect
        x={1}
        y={9}
        rx={1}
        sx={{
          transform: open ? 'translate(1.5px, -1.2px) rotateZ(45deg)' : '',
        }}
      />
    </svg>
  )
}
