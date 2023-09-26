import { Box, Typography } from '@mui/material'
import Hero from '@/components/Hero'

export default function HeroBlog() {
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
            (9)
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
