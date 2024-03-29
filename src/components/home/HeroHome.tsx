import { Stack, Box, Button, Typography } from '@mui/material'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'
import HeroAnimation from './HeroAnimation'
import { useRouter } from 'next/router'

export default function Hero() {
  const router = useRouter()
  return (
    <Section
      sx={{
        paddingTop: { xs: 6, sm: 10, md: 22 },
        paddingBottom: { xs: 6, sm: 10, md: 22 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: { xs: 'row', sm: 'column' },
          gridTemplateColumns: { xs: 'none', sm: 'repeat(2, 1fr)' },
          rowGap: 2,
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          rowGap={2}
          justifyContent={'space-between'}
        >
          <Typography
            component={motion.h1}
            {...useMovingFade({ stagger: 0 })}
            variant="body1"
            color="text.secondary"
          >
            Intro
          </Typography>
          <HeroAnimation />
        </Stack>
        <Box
          sx={{
            justifySelf: 'center',
            maxWidth: { xs: 'initial', sm: 330 },
            marginRight: { xs: 0, md: 8, lg: 24, xl: 28 },
          }}
        >
          <Typography
            component={motion.p}
            {...useMovingFade({ stagger: 2 })}
            variant="h3"
            sx={{ fontWeight: 500 }}
          >
            I'm a developer crafting applications and tools in San Jose,
            California.
          </Typography>
          <Typography
            component={motion.p}
            {...useMovingFade({ stagger: 3 })}
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
            component={motion.button}
            {...useMovingFade({ stagger: 4 })}
            variant="contained"
            color="primary"
            href="/about"
            onClick={() => router.push('/about')}
            sx={{ mt: 4, borderRadius: 5, px: 2.5, pt: 0.875, pb: 1 }}
          >
            About me
          </Button>
        </Box>
      </Box>
    </Section>
  )
}
