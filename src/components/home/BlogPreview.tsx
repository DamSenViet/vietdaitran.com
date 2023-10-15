import NextLink from 'next/link'
import { Link, Stack, Typography } from '@mui/material'
import BlogPostGrid from '@/components/blog/BlogPostGrid'
import Section from '@/components/Section'
import profile2018 from '@/assets/2018 Profile.jpg'

const articles = new Array(4).fill(0).map((_, i) => ({
  id: i.toString(),
  title: `Design Ethics in the Age of Big Data (${i + 1})`,
  tags: ['Branding', 'Design'],
  previewImg: profile2018.src,
  publishDate: `2000-01-0${i + 1}`,
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
        <Typography component={'h2'} variant="h1">
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
      <BlogPostGrid
        postData={articles}
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
