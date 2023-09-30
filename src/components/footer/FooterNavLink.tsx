import NextLink from 'next/link'
import { Link, Typography, styled } from '@mui/material'
import { IconType } from 'react-icons'

export interface FooterNavLinkProps {
  href: string
  children?: React.ReactNode
  icon?: React.ReactNode
}

export default function FooterNavLink({
  href,
  children,
  icon,
}: FooterNavLinkProps) {
  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

  return (
    <Link
      component={isExternal ? 'a' : NextLink}
      href={href}
      underline="hover"
      color="text.primary"
      sx={{
        display: 'inline-flex',
        columnGap: 1,
        alignItems: 'flex-start',
      }}
    >
      <span>{icon}</span>
      <Typography variant="body2">{children}</Typography>
    </Link>
  )
}
