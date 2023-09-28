import React from 'react'
import NextLink from 'next/link'
import { styled } from '@mui/material'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const StyledNextLink = styled(NextLink)({})

export function NavLink(props: NavLinkProps) {
  const { href, children } = props
  const router = useRouter()
  const pathname = href
  const routerPathname = router.pathname
  const shouldBeActive = pathname === routerPathname

  return (
    <StyledNextLink
      className="active"
      href={href}
      sx={{
        typography: 'subtile2',
        color: shouldBeActive ? 'text.primary' : 'text.secondary',
        textDecoration: 'none',
        paddingX: 2,
        paddingY: 1,
        borderRadius: 100,
      }}
    >
      {children}
    </StyledNextLink>
  )
}
