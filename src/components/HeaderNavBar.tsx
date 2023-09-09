import { styled, Box, List, ListItem } from '@mui/material'
import { NavLink } from '@/components/NavLink'

const navLinks = {
  // Home: '/',
  About: '/about',
  Work: '/work',
  Blog: '/blog',
  Contact: '/contact',
}

const MyList = styled(List)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 10,
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))

export default function HeaderNavBar() {
  const NavLinks = Object.entries(navLinks).map(([label, href], i) => (
    <ListItem key={label} sx={{ ml: i === 0 ? 0 : 1, padding: 0 }}>
      <NavLink href={href}>{label}</NavLink>
    </ListItem>
  ))
  return (
    <Box component={'nav'}>
      <MyList>{NavLinks}</MyList>
    </Box>
  )
}
