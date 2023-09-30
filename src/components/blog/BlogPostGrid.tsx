import React from 'react'
import { Box, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import BlogPostGridItem, { BlogPostGridItemProps } from './BlogPostGridItem'

export interface BlogPostGridProps {
  articles?: BlogPostGridItemProps[]
  sx?: SystemStyleObject<Theme>
}

const BlogPostGrid = React.forwardRef(function BlogPostGrid(
  { articles = [], sx }: BlogPostGridProps,
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
        <BlogPostGridItem key={article.title} {...article} />
      ))}
    </Box>
  )
})

export default BlogPostGrid
