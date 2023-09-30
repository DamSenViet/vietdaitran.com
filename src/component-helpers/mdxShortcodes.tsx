import React, { DetailedHTMLProps, ComponentProps } from 'react'
import NextImage from 'next/image'
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from '@mui/material'
import { mapValues } from 'lodash'

const StyledImage = styled('img')({})

const StyledNextImage = styled(NextImage)({})

const p = (props: any) => (
  <Typography
    comopnent={'p'}
    variant={'body1'}
    {...props}
    sx={{ marginY: 2 }}
  />
)

const markdownTagToTypographyVariant = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

export default {
  ...mapValues(markdownTagToTypographyVariant, (val, key) => (props: any) => (
    <Typography comopnent={key} variant={val} {...props} />
  )),
  p,
  table: (props: any) => (
    <TableContainer>
      <Table {...props} />
    </TableContainer>
  ),
  thead: (props: any) => <TableHead {...props} />,
  tr: (props: any) => <TableRow {...props} />,
  th: (props: any) => <TableCell {...props} sx={{ fontWeight: 700 }} />,
  tbody: (props: any) => <TableBody {...props} />,
  td: (props: any) => <TableCell {...props} />,
  img: (props: any) => (
    <StyledImage
      sx={{
        maxHeight: '400px',
      }}
      {...props}
    />
  ),
  // blockquote
  Typography,
  StyledNextImage,
}
