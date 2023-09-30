import React from 'react'
import { Box, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import WorkPostGridItem, { WorkPostGridItemProps } from './WorkPostGridItem'

export interface WorkPostGridProps {
  postData?: WorkPostGridItemProps[]
  sx?: SystemStyleObject<Theme>
}

const WorkPostGrid = React.forwardRef(function WorkPostGrid(
  { postData: works = [], sx }: WorkPostGridProps,
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
        rowGap: {
          xs: 5,
          md: 7,
        },
        ...sx,
      }}
    >
      {works.map((work) => (
        <WorkPostGridItem key={work.title} {...work} />
      ))}
    </Box>
  )
})

export default WorkPostGrid