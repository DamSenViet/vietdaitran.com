import { Box, Stack, Button, Typography } from '@mui/material'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export default function Hero() {
  return (
    <Section sx={{ paddingTop: 22, paddingBottom: 22 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
      >
        <Typography
          component={motion.h1}
          {...useMovingFade()}
          variant="body1"
          color="text.secondary"
        >
          Intro
        </Typography>
        <Box
          component={motion.div}
          {...useMovingFade()}
          sx={{
            maxWidth: { xs: 'initial', sm: 330 },
            margintTop: { xs: 2, sm: 0 },
            marginRight: { xs: 0, md: 8, lg: 24, xl: 28 },
          }}
        >
          <Typography component="p" variant="h3" sx={{ fontWeight: 500 }}>
            I'm a developer crafting applications and tools in San Jose,
            California.
          </Typography>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            sx={{
              marginTop: 1,
              fontWeight: 400,
            }}
          >
            Passionate about empowering others to participate in their
            communities through crafted digital experiences.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/about"
            sx={{ mt: 4, borderRadius: 5, px: 2.5, pt: 0.875, pb: 1 }}
          >
            About me
          </Button>
        </Box>
      </Stack>
    </Section>
  )
}
