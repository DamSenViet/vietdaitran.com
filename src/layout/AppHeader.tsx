import { GlobalStyles, Box, Container, styled } from '@mui/material'
import ThemeModeToggle from '@/components/ThemeModeToggle'
import HeaderNavDropdown from './HeaderNavDropdown'
import HeaderNavBar from './HeaderNavBar'
import Logo from '@/components/Logo'
import { transparentize } from 'color2k'

// Header must be a static height for reservation of space
const SHOW_STATUS_BAR = false
const STATUS_BAR_HEIGHT = SHOW_STATUS_BAR ? 4 : 0
const NAVBAR_HEIGHT = 100
const HEADER_HEIGHT = STATUS_BAR_HEIGHT + NAVBAR_HEIGHT

const StatusBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage:
    'linear-gradient(to right, #E39600, #EA4C89, #8F48EB, #1DA1F2)',
  minHeight: STATUS_BAR_HEIGHT,
}))

const NavigationFade = styled(Box)(({ theme }) => {
  const initStop = transparentize(theme.palette.background.default, 1)
  const endStop = transparentize(theme.palette.background.default, 0)
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    minHeight: 150,
    height: '100%',
    width: '100%',
    opacity: 0.5,
    background: `linear-gradient(0deg,${initStop} 0%,${endStop} 100%)`,
    zIndex: -1,
  }
})

export default function AppHeader() {
  return (
    <Box
      component={'header'}
      sx={(theme) => ({
        position: 'fixed',
        height: HEADER_HEIGHT,
        width: '100%',
        top: 0,
        left: 0,
        zIndex: theme.zIndex.appBar,
      })}
    >
      <GlobalStyles
        styles={{ ':root': { '--header-height': `${HEADER_HEIGHT}px` } }}
      />
      <NavigationFade />
      {SHOW_STATUS_BAR && <StatusBar />}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: NAVBAR_HEIGHT,
        }}
      >
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
            display: { xs: 'none', md: 'initial' },
            ml: 'auto',
            mr: 'auto',
          }}
        >
          <HeaderNavBar />
        </Box>
        <Box sx={{ display: { md: 'none' }, ml: 'auto' }}>
          <HeaderNavDropdown />
        </Box>
        <Box sx={{ ml: 2 }}>
          <ThemeModeToggle />
        </Box>
      </Container>
    </Box>
  )
}
