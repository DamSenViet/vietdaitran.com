import { styled, GlobalStyles, Box, Container } from '@mui/material'
import ThemeModeToggle from '@/components/ThemeModeToggle'

// Header must be a static height for reservation of space
const HEADER_HEIGHT = 60
const Header = styled('header')(({ theme }) => {
  return {
    height: `${HEADER_HEIGHT}px`,
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
  }
})

export default function AppHeader() {
  return (
    <Header>
      <GlobalStyles
        styles={{
          ':root': {
            '--header-height': `${HEADER_HEIGHT}px`,
          },
        }}
      />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: HEADER_HEIGHT,
        }}
      >
        <Box>{/* LOGO HERe */}</Box>
        <Box sx={{ ml: 'auto' }} />
        <Box>
          <ThemeModeToggle />
        </Box>
        <Box>{/* HEADER NAV DROPDOWN TOGGLE */}</Box>
      </Container>
    </Header>
  )
}
