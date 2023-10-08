import { Box, Typography } from '@mui/material'
import Hero from '@/components/Hero'

interface HeroWorksProps {
  totalPostCount: number
}

export default function HeroWorks({ totalPostCount }: HeroWorksProps) {
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
            ({totalPostCount})
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
