import React from 'react'
import {
  GlobalStyles,
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import ThemeModeToggle from '@/components/ThemeModeToggle'
import HeaderNavDropdown from '@/components/HeaderNavDropdown'
import HeaderNavBar from './HeaderNavBar'
import Logo from '@/components/Logo'

// Header must be a static height for reservation of space
const MOBILE_NAVBAR_HEIGHT = 74
const DESKTOP_NAVBAR_HEIGHT = 96

export default function AppHeader() {
  const theme = useTheme()
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'))

  const headerHeight = React.useMemo(
    () => (isLgScreen ? DESKTOP_NAVBAR_HEIGHT : MOBILE_NAVBAR_HEIGHT),
    [isLgScreen]
  )

  return (
    <Box
      component={'header'}
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        minHeight: headerHeight,
        width: '100%',
        zIndex: theme.zIndex.appBar,
      })}
    >
      <GlobalStyles
        styles={{ ':root': { '--header-height': `${headerHeight}px` } }}
      />
      <Container
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: headerHeight,
          borderLeft: `1px solid ${theme.palette.text.disabled}`,
          borderBottom: `1px solid ${theme.palette.text.disabled}`,
          borderRight: `1px solid ${theme.palette.text.disabled}`,
          backgroundColor: theme.palette.background.default,
          backdropFilter: 'blur(10px)',
        })}
      >
        {/* encapsulate all components in boxes to more easily control positioning */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'inline-block' },
            ml: {
              sm: 8,
              md: 22,
              lg: 27,
            },
          }}
        >
          <Typography color="text.primary" variant="body2">
            Software Engineer
            <br />
            UI/UX Designer
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'initial' },
            ml: 'auto',
          }}
        >
          <HeaderNavBar />
        </Box>
        <Box
          sx={{
            display: { md: 'none' },
            marginLeft: {
              xs: 'auto',
              lg: 0,
            },
          }}
        >
          <HeaderNavDropdown />
        </Box>
        <Box sx={{ ml: { xs: 2, lg: 16 } }}>
          <ThemeModeToggle />
        </Box>
      </Container>
    </Box>
  )
}
