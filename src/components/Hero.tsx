import React from 'react'
import { Box, Typography } from '@mui/material'
import Section from './Section'

interface HeroProps {
  title: React.ReactNode
  tagline: React.ReactNode
}

export default function Hero({ title, tagline }: HeroProps) {
  return (
    <Section
      sx={{
        paddingTop: {
          xs: 11,
          md: 20,
        },
        paddingBottom: {
          xs: 11,
          md: 24,
        },
      }}
    >
      <Box
        display={'grid'}
        gridTemplateColumns={{
          xs: 'none',
          md: '10fr 6fr',
        }}
        rowGap={2}
        alignItems={{
          xs: 'initial',
          md: 'flex-end',
        }}
      >
        <Typography
          component={'h2'}
          color="text.primary"
          sx={{
            typography: {
              xs: 'h3',
              md: 'h2',
            },
          }}
        >
          {title}
        </Typography>
        <Typography component={'p'} color="text.secondary" variant="body1">
          {tagline}
        </Typography>
      </Box>
    </Section>
  )
}
