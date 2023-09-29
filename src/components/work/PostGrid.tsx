import React from 'react'
import { Box, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import PostGridItem, { PostGridItemProps } from './PostGridItem'

export interface PostGridProps {
  works?: PostGridItemProps[]
  sx?: SystemStyleObject<Theme>
}

const PostGrid = React.forwardRef(function WorkGrid(
  { works = [], sx }: PostGridProps,
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
        <PostGridItem key={work.title} {...work} />
      ))}
    </Box>
  )
})

export default PostGrid
