import NextLink from 'next/link'
import { Link, Stack, Typography } from '@mui/material'
import WorkGrid from '@/components/work/WorkGrid'
import Section from '@/components/Section'
import profile2018 from '@/assets/2018 Profile.jpg'
import testImage from '@/assets/2023 Profile.jpg'

const works = [
  { src: profile2018 },
  { src: testImage },
  { src: profile2018 },
  { src: profile2018 },
  { src: profile2018 },
  { src: profile2018 },
]

export default function WorkPreview() {
  return (
    <Section>
      <Stack
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        rowGap={7}
        justifyContent={'space-between'}
        alignItems={{
          xs: 'flex-start',
          md: 'flex-end',
        }}
      >
        <Typography
          component={'h2'}
          sx={{ typography: { xs: 'h3', md: 'h2' } }}
        >
          Work
          <Typography
            color="text.secondary"
            component={'sup'}
            variant={'body1'}
            sx={{ ml: 0.5, verticalAlign: 'top' }}
          >
            (Project count Here)
          </Typography>
        </Typography>
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={{
            xs: '100%',
            md: '35%',
          }}
        >
          <Typography color="text.secondary">Selected projects</Typography>
          <Link
            component={NextLink}
            href={'/work'}
            color="text.primary"
            underline="hover"
          >
            <Typography>View all</Typography>
          </Link>
        </Stack>
      </Stack>
      <WorkGrid works={works}></WorkGrid>
    </Section>
  )
}
