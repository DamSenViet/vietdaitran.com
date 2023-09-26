import NextLink from 'next/link'
import { Link, Stack, Typography } from '@mui/material'
import PostGrid from '@/components/blog/PostGrid'
import Section from '@/components/Section'
import profile2018 from '@/assets/2018 Profile.jpg'

const articles = new Array(4).fill(0).map((_, i) => ({
  title: `Design Ethics in the Age of Big Data (${i + 1})`,
  tags: 'Branding, Design',
  src: profile2018,
  date: new Date(),
}))

export default function BlogPreview() {
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
          Blog
          <Typography
            color="text.secondary"
            component={'sup'}
            variant={'body1'}
            sx={{ ml: 0.5, verticalAlign: 'top' }}
          >
            (Post count here)
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
          <Typography color="text.secondary">Latest updates</Typography>
          <Link
            component={NextLink}
            href={'/blog'}
            color="text.primary"
            underline="hover"
          >
            <Typography>View all</Typography>
          </Link>
        </Stack>
      </Stack>
      <PostGrid
        articles={articles}
        sx={{
          marginTop: {
            xs: 2,
            md: 11,
          },
        }}
      />
    </Section>
  )
}
