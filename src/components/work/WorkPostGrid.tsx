import React from 'react'
import { useMediaQuery, Box, Typography, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import WorkPostGridItem, { WorkPostGridItemProps } from './WorkPostGridItem'
import { useTheme } from '@mui/material'
import { BsCodeSquare } from 'react-icons/bs'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export interface WorkPostGridProps {
  postData?: WorkPostGridItemProps[]
  /**
   * Whether to trim incomplete rows responsively.
   */
  trim?: boolean
  sx?: SystemStyleObject<Theme>
}

const WorkPostGrid = React.forwardRef(function WorkPostGrid(
  { postData = [], trim = false, sx }: WorkPostGridProps,
  ref
) {
  const maxColumns = {
    xs: 2,
    md: 3,
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

  // empty display
  if (postData.length === 0)
    return (
      <Box
        component={motion.div}
        {...useMovingFade()}
        ref={ref}
        sx={{
          display: 'grid',
          justifyContent: 'center',
          justifyItems: 'center',
          alignContent: 'center',
          minHeight: 400,
          ...sx,
        }}
      >
        <Box component={motion.div} {...useMovingFade({ amount: 'all' })}>
          <Box
            component={BsCodeSquare}
            size={80}
            sx={(theme) => ({ fill: theme.palette.text.disabled })}
          />
        </Box>
        <Typography
          component={'p'}
          color={'text.secondary'}
          textAlign={'center'}
          sx={{ marginTop: 2 }}
        >
          No posts found.
          <br />
          Work in progress.
        </Typography>
      </Box>
    )

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
      {trimmedPostData.map((postDatum, i) => {
        const columnIndex = i % columns
        return (
          <WorkPostGridItem
            key={postDatum.id}
            {...postDatum}
            stagger={columnIndex}
          />
        )
      })}
    </Box>
  )
})

export default WorkPostGrid
