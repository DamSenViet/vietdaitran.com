/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Typography } from '@mui/material'
import Anchor from '@/components/markdown/Anchor'
import P from '@/components/markdown/P'
import BlockQuote from '@/components/markdown/BlockQuote'
import Img from '@/components/markdown/Img'
import Pre from '@/components/markdown/Pre'
import Table from '@/components/markdown/Table'
import Thead from '@/components/markdown/Thead'
import Tr from '@/components/markdown/Tr'
import Th from '@/components/markdown/Th'
import Tbody from '@/components/markdown/Tbody'
import Td from '@/components/markdown/Td'
import { mapValues } from 'lodash'

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
  pre: Pre,
}

const tableShortcodes = {
  table: Table,
  thead: Thead,
  tr: Tr,
  th: Th,
  tbody: Tbody,
  td: Td,
}

export default {
  ...typographyShortcodes,
  ...tableShortcodes,
  img: Img,
  Typography,
}
