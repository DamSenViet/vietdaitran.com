import { styled, Box, List, ListItem, lighten } from '@mui/material'
import { NavLink } from '@/components/NavLink'
import useByThemeMode from '@/hooks/useByThemeMode'

const navLinks = {
  Home: '/',
  Work: '/work',
  Blog: '/blog',
  About: '/about',
  Contact: '/contact',
}

const MyList = styled(List)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: `${lighten(
    theme.palette.background.default,
    useByThemeMode(0.1, 0.4)
  )}`,
  backdropFilter: 'blur(20)px saturate(1.7)',
}))

export default function HeaderNavBar() {
  const NavLinks = Object.entries(navLinks).map(([label, href], i) => (
    <ListItem key={label} sx={{ ml: i === 0 ? 0 : 1, padding: 0 }}>
      <NavLink href={href}>{label}</NavLink>
    </ListItem>
  ))
  return (
    <Box component={'nav'}>
      <MyList sx={(theme) => ({})}>{NavLinks}</MyList>
    </Box>
  )
}
