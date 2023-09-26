import { Box, Typography } from '@mui/material'
import Hero from '@/components/Hero'

export default function HeroWorks() {
  return (
    <Hero
      title={
        <>
          Work
          <Typography
            color={'text.secondary'}
            component={'sup'}
            variant={'body1'}
            sx={{ ml: 0.5, verticalAlign: 'top' }}
          >
            (9)
          </Typography>
        </>
      }
      tagline={
        <>
          Selected projects I got
          <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} /> a
          chance to work on.
        </>
      }
    />
  )
}
