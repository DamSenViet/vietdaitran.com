import React from 'react'
import { Box, BoxProps } from '@mui/material'
import { Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import sectionPadding from './constants/sectionPadding'

export interface SectionProps extends BoxProps {
  sx?: SystemStyleObject<Theme>
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(function Section(
  { children, sx, ...other }: SectionProps,
  ref
) {
  return (
    <Box
      ref={ref}
      component={'section'}
      {...other}
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        ...sectionPadding,
        ...sx,
      })}
    >
      {children}
    </Box>
  )
})

export default Section
