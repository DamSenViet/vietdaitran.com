/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps, ElementType } from 'react'
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
import { BsLink45Deg } from 'react-icons/bs'
import { mapValues } from 'lodash'
import NextLink from 'next/link'
import { styled, LinkProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

const headingTagNameToVariant = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const HeadingAnchor = styled(NextLink)<{ underline?: LinkProps['underline'] }>(
  ({ underline }) => {
    const underlineMapping = {
      none: ['none', 'none'],
      hover: ['none', 'underline'],
      always: ['underline', 'underline'],
    }
    return {
      color: 'inherit',
      textDecoration: underlineMapping[underline ? underline : 'always'][0],
      '&:hover': {
        textDecoration: underlineMapping[underline ? underline : 'always'][1],
        textDecorationThickness: '0.08em',
      },
      textUnderlineOffset: '0.15em',
    }
  }
)

const headingShortcodes = mapValues(
  headingTagNameToVariant,
  (val, key) =>
    ({
      id,
      children,
    }: ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>) => (
      <Typography
        id={id} // rehype-slug generates the id for us
        component={key as ElementType<any>}
        variant={val as Variant}
        sx={{ marginTop: 3, marginBottom: 2 }}
      >
        <HeadingAnchor href={`#${id}`} underline="hover">
          {children}
          <Typography
            component={'span'}
            color={'text.secondary'}
            variant="inherit"
            sx={{ marginLeft: 1, fontSize: 'inherit' }}
          >
            <BsLink45Deg
              size={'1.6rem'}
              style={{ verticalAlign: 'baseline' }}
            />
          </Typography>
        </HeadingAnchor>
      </Typography>
    )
)

const typographyShortcodes = {
  ...headingShortcodes,
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
