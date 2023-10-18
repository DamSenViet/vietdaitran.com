import NextLink from 'next/link'
import { Link, Stack, Typography } from '@mui/material'
import BlogPostGrid, { BlogPostGridProps } from '@/components/blog/BlogPostGrid'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export interface BlogPreviewProps extends BlogPostGridProps {
  totalPostCount: number
}

export default function BlogPreview({ totalPostCount }: BlogPreviewProps) {
  return (
    <Section>
      <Stack
        component={motion.div}
        {...useMovingFade()}
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
        <Typography component={motion.h2} {...useMovingFade()} variant="h1">
          Blog
          <Typography
            color="text.secondary"
            component={'sup'}
            variant={'body1'}
            sx={{ ml: 0.5, verticalAlign: 'top' }}
          >
            ({totalPostCount})
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
          <Typography
            component={motion.p}
            {...useMovingFade({ stagger: 1 })}
            color="text.secondary"
          >
            Latest updates
          </Typography>
          <Link
            component={motion(NextLink)}
            {...useMovingFade({ stagger: 2 })}
            href={'/blog'}
            color="text.primary"
            underline="hover"
          >
            <Typography>View all</Typography>
          </Link>
        </Stack>
      </Stack>
      <BlogPostGrid
        postData={[]}
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
