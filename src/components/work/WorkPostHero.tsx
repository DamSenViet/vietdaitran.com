import { Box, Typography, Chip } from '@mui/material'
import Section from '../Section'
import { WorkPostDatum } from '@/api/workPosts'
import { getYear } from 'date-fns'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export interface WorkPostHeroProps {
  postDatum: WorkPostDatum
}

export default function WorkPostHero({
  postDatum: { title, endDate, tags, audience, service, sector },
}: WorkPostHeroProps) {
  return (
    <Section
      sx={{
        paddingTop: {
          xs: 12,
          md: 18,
          lg: 20,
        },
        display: 'grid',
        rowGap: 4,
        columnGap: 4,
        gridAutoRows: 'auto',
        gridTemplateColumns: {
          xs: 'none',
          lg: '492px 492px',
        },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          rowGap: 1,
        }}
      >
        <Typography
          component={motion.p}
          {...useMovingFade({ stagger: 0 })}
          variant="body1"
          color={'text.secondary'}
        >
          Work
        </Typography>
        <Typography
          component={motion.h1}
          {...useMovingFade({ stagger: 1 })}
          variant="h1"
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 5.75,
        }}
      >
        <Box component={motion.div} {...useMovingFade({ stagger: 2 })}>
          <Typography variant="body1" color="text.secondary">
            Audience: {audience}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Service: {service}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sector: {sector}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Year: {getYear(new Date(endDate))}
          </Typography>
        </Box>
        <Box
          component={motion.div}
          {...useMovingFade({ stagger: 3 })}
          sx={{
            marginTop: 1,
            display: 'flex',
            columnGap: 1,
            gridTemplateColumns: 'auto-fill',
          }}
        >
          {tags &&
            tags.map((tag) => <Chip key={tag} label={tag} variant="filled" />)}
        </Box>
      </Box>
    </Section>
  )
}
