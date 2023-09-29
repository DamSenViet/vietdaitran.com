import { Box, Typography } from '@mui/material'
import Section from '@/components/Section'

export default function HeroAbout() {
  return (
    <Section
      sx={{
        paddingTop: {
          xs: 8,
          md: 14,
          lg: 18,
        },
        paddingBottom: {
          xs: 11,
          md: 18,
          lg: 20,
        },
      }}
    >
      <Typography component="h2" variant="body1" color="text.secondary">
        About
      </Typography>
      <Typography
        component={'p'}
        sx={{
          typography: {
            xs: 'h3',
            md: 'h4',
            lg: 'h3',
          },
          marginTop: 1,
        }}
      >
        Viet Tran is a creative developer&nbsp;
        <Box component="br" display={{ xs: 'none', md: 'initial' }} />
        crafting apps and tools for&nbsp;
        <Box component="br" display={{ xs: 'none', md: 'initial' }} />
        online communities.
      </Typography>
    </Section>
  )
}
