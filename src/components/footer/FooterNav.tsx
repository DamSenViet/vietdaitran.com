import {
  Box,
  Button,
  Grid,
  Stack,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import FooterNavLink from '@/components/footer/FooterNavLink'
import sectionPadding from '@/components/constants/sectionPadding'

const navLinks: Record<string, string> = {
  About: '/about',
  Work: '/work',
  Blog: '/blog',
}

const socialLinks: Record<string, string> = {
  Github: 'https://github.com/DamSenViet',
  Dribble: 'https://dribbble.com/DamSenViet',
  LinkedIn: 'https://www.linkedin.com/in/viet-tran-b33485151/',
}

export default function FooterNav() {
  return (
    <Box
      sx={(theme) => ({
        ...sectionPadding,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <Grid
        container
        rowSpacing={{
          xs: 4,
          md: 34,
        }}
      >
        <Grid item>
          <Typography color="text.secondary" component={'h2'} variant="body1">
            Contact
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={'space-between'}
          direction={{
            xs: 'column',
            md: 'row',
          }}
          rowSpacing={15}
        >
          <Grid item md={8}>
            <Typography component="p" variant="h4" sx={{ fontWeight: 500 }}>
              Have a project in mind?
              <br />
              Let's work together.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/about"
              sx={{ mt: 3, borderRadius: 5, px: 2.5, pt: 0.875, pb: 1 }}
            >
              Let's talk
            </Button>
          </Grid>
          <Grid component={'nav'} item md={4} aria-label="secondary">
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
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
