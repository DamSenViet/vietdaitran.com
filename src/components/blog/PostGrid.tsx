import React from 'react'
import { Box, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import PostGridItem, { PostGridItemProps } from './PostGridItem'

export interface PostGridProps {
  articles?: PostGridItemProps[]
  sx?: SystemStyleObject<Theme>
}

const PostGrid = React.forwardRef(function PostGrid(
  { articles = [], sx }: PostGridProps,
  ref
) {
  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        alignItems: 'flex-start',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
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
      {articles.map((article) => (
        <PostGridItem key={article.title} {...article} />
      ))}
    </Box>
  )
})

export default PostGrid
