import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import {
  styled,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@mui/material'

const StyledNextLink = styled(NextLink)<{
  underline?: MuiLinkProps['underline']
}>(({ theme, underline }) => {
  const underlineMapping = {
    none: ['none', 'none'],
    hover: ['none', 'underline'],
    always: ['underline', 'underline'],
  }
  return {
    color: theme.palette.info.main,
    textDecoration: underlineMapping[underline ? underline : 'always'][0],
    '&:hover': {
      textDecoration: underlineMapping[underline ? underline : 'always'][1],
      textDecorationThickness: '0.08em',
    },
    textUnderlineOffset: '0.15em',
  }
})

export interface AnchorProps extends ComponentProps<'a'> {
  inheritColor?: boolean
}

/**
 * A link that automatically chooses the NextLink or a render as an
 * external link with icon. Meant to be used inline text content.
 */
export default function Anchor({ href, children }: AnchorProps) {
  const isExternal = React.useMemo(
    () =>
      typeof href === 'string' &&
      (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0),
    [href]
  )

  if (href && !isExternal)
    return (
      <StyledNextLink
        href={href}
        rel="noopener"
        underline="hover"
        color={'info.main'}
        sx={{
          textUnderlineOffset: '0.15em',
        }}
      >
        {children}
      </StyledNextLink>
    )

  return (
    <MuiLink
      href={href}
      underline="hover"
      color={'info.main'}
      sx={{
        textUnderlineOffset: '0.15em',
        '&:hover': {
          textDecorationThickness: '0.08em',
        },
      }}
    >
      {children}
    </MuiLink>
  )
}
