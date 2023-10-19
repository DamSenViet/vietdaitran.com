import React from 'react'
import { NavLink } from './NavLink'
import {
  Box,
  List,
  ListItem,
  Typography,
  ClickAwayListener,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useKey } from 'react-use'
import { transparentize } from 'color2k'
import socialLinks from '@/data/socialLinks'
import { stepDuration, staggerDelay } from '@/utils/animation'

export interface HeaderNavModalProps {
  hamburgerRef: React.MutableRefObject<HTMLButtonElement | null>
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

const internalItems = internalRoutes.map((route, i, routes) => (
  <ListItem
    key={route.label}
    component={motion.li}
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{
      delay: (routes.length - (i + 1)) * staggerDelay,
      type: 'just',
      duration: stepDuration,
    }}
  >
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
  { hamburgerRef, onClose }: HeaderNavModalProps,
  ref
) {
  // close after page switches
  const router = useRouter()
  const [startingPathname] = React.useState(router.pathname)
  React.useEffect(() => {
    if (startingPathname !== router.pathname) onClose()
  }, [router.pathname])

  useKey('Escape', onClose)

  const fadeOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: stepDuration + staggerDelay * (internalRoutes.length - 1),
        duration: stepDuration,
      },
    },
  }

  return (
    <ClickAwayListener
      onClickAway={(event) => {
        if (
          // note that hamburger icon cannot switch when the click away triggers
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target as Node)
        )
          onClose()
      }}
    >
      <Box
        ref={ref}
        component={motion.nav}
        {...fadeOut}
        sx={(theme) => ({
          position: 'absolute',
          display: 'grid',
          top: 'var(--header-height)',
          left: 0,
          zIndex: -2,
          width: '100%',
          height: 'calc(100vh - var(--header-height))',
          backgroundColor: transparentize(
            theme.palette.background.default,
            theme.palette.mode === 'light' ? 0.2 : 0.1
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
    </ClickAwayListener>
  )
})

export default HeaderNavModal
