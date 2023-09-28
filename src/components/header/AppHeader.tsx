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
import HeaderNavDropdown from '@/components/header/HeaderNavDropdown'
import HeaderNavBar from './HeaderNavBar'
import Logo from '@/components/header/Logo'
import containerSx from '@/components/constants/containerSx'
import sectionPadding from '@/components/constants/sectionPadding'
import { transparentize } from 'color2k'

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
    <Container
      component={'header'}
      disableGutters
      maxWidth={false}
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        minHeight: headerHeight,
        zIndex: theme.zIndex.appBar,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...containerSx,
        paddingX: sectionPadding.paddingX,
        maxHeight: headerHeight,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        backgroundColor: transparentize(theme.palette.background.default, 0.1),
        backdropFilter: 'blur(10px)',
      })}
    >
      <GlobalStyles
        styles={{ ':root': { '--header-height': `${headerHeight}px` } }}
      />

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
          UX / UX Designer
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
  )
}
