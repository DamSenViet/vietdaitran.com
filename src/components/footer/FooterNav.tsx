import { Box, Button, Stack, List, ListItem, Typography } from '@mui/material'
import FooterNavLink from '@/components/footer/FooterNavLink'
import sectionPadding from '@/components/constants/sectionPadding'
import socialLinks, { linkedIn } from '@/data/socialLinks'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

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
        <Typography
          component={motion.h2}
          {...useMovingFade()}
          color="text.secondary"
          variant="body1"
        >
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
          <Box component={motion.div} {...useMovingFade()}>
            <Typography component="p" variant="h3" sx={{ fontWeight: 500 }}>
              Have a project in mind?
              <br />
              Let's work together.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={linkedIn.href}
              sx={{ mt: 3, borderRadius: 5, px: 2.5, pt: 0.875, pb: 1 }}
            >
              Let's talk
            </Button>
          </Box>
          <Box component={motion.nav} {...useMovingFade()}>
            <Stack direction={'row'}>
              <List disablePadding sx={{ flexGrow: 1 }}>
                {Object.entries(navLinks).map(([name, url]) => (
                  <ListItem key={name} disablePadding>
                    <FooterNavLink href={url}>{name}</FooterNavLink>
                  </ListItem>
                ))}
              </List>
              <List disablePadding sx={{ flexGrow: 1 }}>
                {socialLinks.map(({ label, href, Icon }) => (
                  <ListItem key={label} disablePadding>
                    <FooterNavLink
                      href={href}
                      icon={<Icon />}
                      children={label}
                    />
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
