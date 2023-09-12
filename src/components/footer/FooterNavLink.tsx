import NextLink from 'next/link'
import { Link, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router'

export interface FooterNavLinkProps {
  href: string
  children: React.ReactNode
}

export default function FooterNavLink({ href, children }: FooterNavLinkProps) {
  // const router = useRouter()

  // const isActive = href === router.pathname
  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

  return (
    <Link
      component={isExternal ? 'a' : NextLink}
      href={href}
      underline="hover"
      color="text.primary"
    >
      <Typography variant="body2">{children}</Typography>
    </Link>
  )
}
