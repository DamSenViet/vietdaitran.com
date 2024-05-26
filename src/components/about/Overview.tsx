import NextImage from 'next/image'
import { Box, Typography, styled } from '@mui/material'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

const Image = styled(NextImage)({})

export default function Overview() {
  return (
    <Section
      sx={{
        display: 'grid',
        rowGap: {
          xs: 3,
          md: 4,
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          rowGap: 4,
          gridTemplateColumns: {
            xs: 'none',
            md: '1fr 1fr',
          },
        }}
      >
        <Typography
          component={motion.h2}
          {...useMovingFade()}
          variant="body1"
          color="text.secondary"
        >
          Overview
        </Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: 4,
          }}
        >
          <Typography
            component={motion.p}
            {...useMovingFade({ stagger: 1 })}
            variant="body1"
          >
            Viet Tran is a software engineer and UI/UX designer with a passion
            for creating impactful and meaningful applications and tools for
            online community members and developers. With a diverse background
            and years of experience, he brings a wealth of knowledge and
            expertise to every project.
          </Typography>
          <Typography
            component={motion.p}
            {...useMovingFade({ stagger: 2 })}
            variant="body1"
          >
            Previously, he joined Planview as a frontend developer, working on
            analytics and portfolio management platforms for high-profile
            pharmaceutical companies. This experience sharpened his eye for
            detail, refined his design thinking, and understanding of data
            utilization.
          </Typography>
          <Typography
            component={motion.p}
            {...useMovingFade({ stagger: 3 })}
            variant="body1"
          >
            In 2020, he made the decision to build acpatterns.com gaining
            recognition from museums across the world. Since then, he had the
            pleasure of collaborating and building applications for the online
            communities he participates in, each with unique design challenges
            and goals.
          </Typography>
        </Box>
      </Box>
    </Section>
  )
}
