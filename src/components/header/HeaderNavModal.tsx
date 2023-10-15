import React from 'react'
import { NavLink } from './NavLink'
import { Box, List, ListItem, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useKey } from 'react-use'
import { transparentize } from 'color2k'
import socialLinks from '@/data/socialLinks'

export interface HeaderNavModalProps {
  open: boolean
  onClose: () => void
}

const internalRoutes = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

const internalItems = internalRoutes.map((route) => (
  <ListItem key={route.label}>
    <NavLink href={route.href}>
      <Typography
        component={'span'}
        variant="h3"
        sx={{
          fontWeight: 700,
          '&::before': {
            typography: 'subtitle2',
            fontWeight: 'inherit',
            display: 'inline',
            counterIncrement: 'listStyle',
            content: `counter(listStyle, decimal-leading-zero) "."`,
            marginRight: 2,
          },
        }}
      >
        {route.label}
      </Typography>
    </NavLink>
  </ListItem>
))

const socialItems = (
  <List
    sx={(theme) => ({
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translate(0, -50%)',
      backgroundColor: theme.palette.common.white,
    })}
  >
    {socialLinks.map((link) => (
      <ListItem key={link.label} disablePadding>
        <NavLink href={link.href}>
          <link.Icon fill="inherit" />
        </NavLink>
      </ListItem>
    ))}
  </List>
)

const HeaderNavModal = React.forwardRef(function HeaderNavModal(
  { open, onClose }: HeaderNavModalProps,
  ref
) {
  // close after page switches
  const router = useRouter()
  React.useEffect(() => {
    onClose()
  }, [router.pathname])

  useKey('Escape', onClose)

  return (
    <Box
      ref={ref}
      component={'nav'}
      sx={(theme) => ({
        position: 'fixed',
        display: open ? 'grid' : 'none',
        top: 'var(--header-height)',
        left: 0,
        zIndex: 1,
        width: '100%',
        height: 'calc(100vh - var(--header-height))',
        backgroundColor: transparentize(
          theme.palette.background.default,
          theme.palette.mode === 'light' ? 0.5 : 0.1
        ),
        // NOTE: Chrome has a bug where only one backdrop filter can be present
        // the AppHeader backdrop will take priority in Chrome
        backdropFilter: 'blur(10px)',
        justifyContent: 'center',
        alignContent: 'center',
      })}
    >
      <Box>
        {/* internal links */}
        <List sx={{ counterReset: 'listStyle' }}>{internalItems}</List>
        {socialItems}
      </Box>
    </Box>
  )
})

export default HeaderNavModal
