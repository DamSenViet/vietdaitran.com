import { GlobalStyles, Box, Container, styled } from '@mui/material'
import ThemeModeToggle from '@/components/ThemeModeToggle'
import HeaderNavDropdown from './HeaderNavDropdown'
import HeaderNavBar from './HeaderNavBar'
import Logo from '@/components/Logo'

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

export default function AppHeader() {
  return (
    <Box
      component={'header'}
      sx={(theme) => ({
        height: HEADER_HEIGHT,
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: theme.zIndex.appBar,
      })}
    >
      <GlobalStyles
        styles={{ ':root': { '--header-height': `${HEADER_HEIGHT}px` } }}
      />
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
        <Box sx={{ ml: 'auto' }} />
        <Box sx={{ display: { xs: 'none', md: 'initial' }, ml: 2 }}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <Box sx={{ display: { md: 'none' }, ml: 2 }}>
          <HeaderNavDropdown />
        </Box>
        <Box sx={{ ml: 2 }}>
          <ThemeModeToggle />
        </Box>
      </Container>
    </Box>
  )
}
