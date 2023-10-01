/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { mapValues } from 'lodash'
import Anchor from '@/components/markdown/Anchor'
import P from '@/components/markdown/P'
import BlockQuote from '@/components/markdown/BlockQuote'
import Img from '@/components/markdown/Img'
import Pre from '@/components/markdown/Pre'

const headingShortcodes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const typographyShortcodes = {
  ...mapValues(headingShortcodes, (val, key) => (props: any) => (
    <Typography comopnent={key} variant={val} {...props} sx={{ marginY: 3 }} />
  )),
  a: Anchor,
  p: P,
  blockquote: BlockQuote,
}

const tableShortcodes = {
  table: (props: any) => (
    <TableContainer>
      <Table {...props} sx={{ display: 'inline-block' }} />
    </TableContainer>
  ),
  thead: (props: any) => <TableHead {...props} />,
  tr: (props: any) => <TableRow {...props} />,
  th: (props: any) => (
    <TableCell {...props} sx={{ fontWeight: 500, color: 'text.secondary' }} />
  ),
  tbody: (props: any) => <TableBody {...props} />,
  td: (props: any) => <TableCell {...props} />,
}

export default {
  ...typographyShortcodes,
  ...tableShortcodes,
  img: Img,
  pre: Pre,
  Typography,
}
