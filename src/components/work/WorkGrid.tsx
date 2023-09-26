import React from 'react'
import { Box, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import WorkGridItem, { WorkGridItemProps } from './WorkGridItem'

export interface WorkGridProps {
  works?: WorkGridItemProps[]
  sx?: SystemStyleObject<Theme>
}

const WorkGrid = React.forwardRef(function WorkGrid(
  { works = [], sx }: WorkGridProps,
  ref
) {
  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
        columnGap: {
          xs: 2,
          md: 3,
        },
        rowGap: 5,
        ...sx,
      }}
    >
      {works.map((work) => (
        <WorkGridItem key={work.title} {...work} />
      ))}
    </Box>
  )
})

export default WorkGrid
