import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import { styled, Link as MuiLink } from '@mui/material'

const StyledNextLink = styled(NextLink)(({ theme }) => ({
  color: theme.palette.info.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))

export interface AnchorProps extends ComponentProps<'a'> {}

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
      <StyledNextLink href={href} rel="noopener">
        {children}
      </StyledNextLink>
    )

  return (
    <MuiLink
      href={href}
      underline="hover"
      rel="noopener"
      color={(theme) => theme.palette.info.main}
    >
      {children}
    </MuiLink>
  )
}
