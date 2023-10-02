import { Box, Typography, Chip } from '@mui/material'
import Section from '../Section'
import { WorkPostDatum } from '@/api/workPosts'
import { getYear } from 'date-fns'

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
        <Typography component={'p'} variant="body1" color={'text.secondary'}>
          Work
        </Typography>
        <Typography component={'h1'} variant="h1">
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 5.75,
        }}
      >
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
        <Box
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
