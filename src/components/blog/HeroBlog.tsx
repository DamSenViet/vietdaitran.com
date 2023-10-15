import { Box, Typography } from '@mui/material'
import Hero from '@/components/Hero'

interface HeroBlogProps {
  totalPostCount: number
}

export default function HeroBlog({ totalPostCount }: HeroBlogProps) {
  return (
    <Hero
      title={
        <>
          Blog
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
          Learning and thoughts
          <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
          on design and tech.
        </>
      }
    />
  )
}
