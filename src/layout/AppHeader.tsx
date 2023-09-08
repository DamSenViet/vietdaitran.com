import {
  GlobalStyles,
  Box,
  Container,
  Typography,
  styled,
  keyframes,
} from '@mui/material'
import ThemeModeToggle from '@/components/ThemeModeToggle'
import HeaderNavDropdown from './HeaderNavDropdown'
import HeaderNavBar from './HeaderNavBar'
import Logo from '@/components/Logo'
import { transparentize } from 'color2k'

// Header must be a static height for reservation of space
const SHOW_STATUS_BAR = false
const STATUS_BAR_HEIGHT = SHOW_STATUS_BAR ? 4 : 0
const NAVBAR_HEIGHT = 96
const HEADER_HEIGHT = STATUS_BAR_HEIGHT + NAVBAR_HEIGHT

const gradientAnimation = keyframes`
  0% { background-position: 0 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0 50% }
`

const StatusBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage:
    'linear-gradient(to right, #E39600, #EA4C89, #8F48EB, #1DA1F2)',
  backgroundSize: '400% 400%',
  animationName: gradientAnimation,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease',
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
        top: 0,
        left: 0,
        height: HEADER_HEIGHT,
        width: '100%',
        zIndex: theme.zIndex.appBar,
      })}
    >
      <GlobalStyles
        styles={{ ':root': { '--header-height': `${HEADER_HEIGHT}px` } }}
      />
      <NavigationFade />
      {SHOW_STATUS_BAR && <StatusBar />}
      <Container
        sx={(theme) => ({
          maxWidth: { lg: 1384 },
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: NAVBAR_HEIGHT,
          borderLeft: `1px solid ${theme.palette.text.disabled}`,
          borderBottom: `1px solid ${theme.palette.text.disabled}`,
          borderRight: `1px solid ${theme.palette.text.disabled}`,
          backgroundColor: theme.palette.background.default,
          backdropFilter: 'blur(10px)',
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Logo />
          <Typography
            color="text.primary"
            variant="body2"
            sx={{
              display: { xs: 'none', sm: 'inline-block' },
              ml: {
                sm: 8,
                md: 22,
                lg: 27,
              },
            }}
          >
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
