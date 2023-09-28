import { Box, Button, Stack, List, ListItem, Typography } from '@mui/material'
import FooterNavLink from '@/components/footer/FooterNavLink'
import sectionPadding from '@/components/constants/sectionPadding'
import socialLinks from '@/data/socialLinks'

const navLinks: Record<string, string> = {
  About: '/about',
  Work: '/work',
  Blog: '/blog',
}

export default function FooterNav() {
  return (
    <Box
      sx={(theme) => ({
        ...sectionPadding,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <Box
        display={'grid'}
        rowGap={{
          xs: 4,
          md: 34,
        }}
      >
        <Typography color="text.secondary" component={'h2'} variant="body1">
          Contact
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'none',
              md: '8fr 4fr',
            },
            rowGap: 15,
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography component="p" variant="h4" sx={{ fontWeight: 500 }}>
              Have a project in mind?
              <br />
              Let's work together.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={socialLinks.LinkedIn}
              sx={{ mt: 3, borderRadius: 5, px: 2.5, pt: 0.875, pb: 1 }}
            >
              Let's talk
            </Button>
          </Box>
          <Box component={'nav'}>
            <Stack direction={'row'}>
              <List disablePadding sx={{ flexGrow: 1 }}>
                {Object.entries(navLinks).map(([name, url]) => (
                  <ListItem key={name} disablePadding>
                    <FooterNavLink href={url}>{name}</FooterNavLink>
                  </ListItem>
                ))}
              </List>
              <List disablePadding sx={{ flexGrow: 1 }}>
                {Object.entries(socialLinks).map(([name, url]) => (
                  <ListItem key={name} disablePadding>
                    <FooterNavLink href={url}>{name}</FooterNavLink>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
