import NextImage, { StaticImageData } from 'next/image'
import { Box, Typography, styled } from '@mui/material'
import Section from '@/components/Section'
import { getYear, Interval } from 'date-fns'
import immerseLogo from '@/assets/experiences/Immerse.svg'
import planviewLogo from '@/assets/experiences/Planview.svg'
import enrichLogo from '@/assets/experiences/Enrich.png'

interface Experience {
  company: string
  role: string
  interval: Interval
  icon: StaticImageData
  iconSize?: number
  iconBackground?: string | undefined
}

const experiences: Experience[] = [
  {
    company: 'Immerse',
    icon: immerseLogo,
    iconBackground: '#050140',
    role: 'Software Engineering Intern',
    interval: {
      start: new Date('February 17, 2020 00:00:00'),
      end: new Date(),
    },
  },
  {
    company: 'Enrich',
    icon: enrichLogo,
    iconSize: 0.8,
    iconBackground: '#FFFFFF',
    role: 'Frontend Developer',
    interval: {
      start: new Date('February 17, 2021 00:00:00'),
      end: new Date(),
    },
  },
  {
    company: 'Planview',
    icon: planviewLogo,
    iconBackground: '#f7f7f7',
    role: 'Frontend Developer',
    interval: {
      start: new Date('June 17, 2023 00:00:00'),
      end: new Date(),
    },
  },
]

const Image = styled(NextImage)({})

export default function Experience() {
  return (
    <Section
      sx={{
        display: 'grid',
        rowGap: 4,
        gridTemplateColumns: {
          xs: 'none',
          md: '1fr 446px',
          lg: '1fr 464px',
          xl: '1fr 494px',
        },
      }}
    >
      <Typography component={'h2'} variant="body1" color="text.secondary">
        Experience
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridAutoRows: 54,
          rowGap: 3.25,
        }}
      >
        {experiences.map((experience) => (
          <Box
            key={experience.company}
            sx={{
              display: 'grid',
              gridTemplateColumns: '54px 1fr',
              columnGap: 2,
              alignItems: 'center',
            }}
          >
            <Box
              justifySelf={'stretch'}
              alignSelf={'stretch'}
              style={{ background: experience.iconBackground }}
              sx={{
                display: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                borderRadius: 1,
              }}
            >
              <Image
                src={experience.icon}
                alt={experience.company}
                width={54}
                sx={{
                  width: experience.iconSize
                    ? `${experience.iconSize * 100}%`
                    : '60%',
                  height: 'auto',
                }}
              />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                columnGap: 2,
                alignItems: 'top',
              }}
            >
              <Box>
                <Typography component={'p'} variant="subtitle1">
                  {experience.company}
                </Typography>
                <Typography
                  component={'p'}
                  variant="body1"
                  color="text.secondary"
                >
                  {experience.role}
                </Typography>
              </Box>
              <Typography
                component={'p'}
                variant="subtitle2"
                color="text.secondary"
                textAlign={'right'}
              >
                {getYear(experience.interval.start)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  )
}
