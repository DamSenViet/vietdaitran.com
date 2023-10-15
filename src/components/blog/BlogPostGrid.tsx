import React from 'react'
import { Box, Theme, useMediaQuery } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import BlogPostGridItem, { BlogPostGridItemProps } from './BlogPostGridItem'
import { useTheme } from '@mui/material'

export interface BlogPostGridProps {
  postData?: BlogPostGridItemProps[]
  /**
   * Whether to trim incomplete rows responsively.
   */
  trim?: boolean
  sx?: SystemStyleObject<Theme>
}

const BlogPostGrid = React.forwardRef(function BlogPostGrid(
  { postData = [], trim = false, sx }: BlogPostGridProps,
  ref
) {
  const maxColumns = {
    xs: 2,
    md: 4,
  }

  const theme = useTheme()
  const columns = useMediaQuery(theme.breakpoints.up('md'))
    ? maxColumns.md
    : maxColumns.xs

  // we'll always get full rows
  const trimmedPostData = React.useMemo(() => {
    const fullRows = Math.floor(postData.length / columns)

    if (fullRows === 0) return postData
    else return trim ? postData.slice(0, fullRows * columns) : postData
  }, [postData, columns])

  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
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
      {trimmedPostData.map((postDatum) => (
        <BlogPostGridItem key={postDatum.id} {...postDatum} />
      ))}
    </Box>
  )
})

export default BlogPostGrid
