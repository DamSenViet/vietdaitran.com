import NextImage from 'next/image'
import NextLink from 'next/link'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from '@mui/material'
import { format } from 'date-fns'
import { BlogPostDatum } from '@/api/blogPosts'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export interface BlogPostGridItemProps extends BlogPostDatum {
  stagger?: number
}

const Image = styled(NextImage)({})

export default function BlogPostGridItem({
  id,
  title,
  tags,
  previewImg,
  publishDate,
  stagger = 0,
}: BlogPostGridItemProps) {
  return (
    <Card
      component={motion.div}
      {...useMovingFade({ stagger })}
      sx={{ background: 'transparent' }}
    >
      <CardActionArea>
        <NextLink href={`/blog/${id}`}>
          <Image
            src={previewImg}
            alt={title}
            height={500}
            width={500}
            priority
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 1,
            }}
          />
        </NextLink>
      </CardActionArea>

      <CardContent
        sx={{
          padding: 0,
          '&:last-child': { padding: 0 },
          marginTop: 1,
        }}
      >
        <Typography
          component={'p'}
          color={'text.primary'}
          variant="body1"
          sx={{ marginTop: 2 }}
        >
          {title}
        </Typography>
        {tags && (
          <Typography
            component={'p'}
            color={'text.secondary'}
            variant={'body2'}
            textOverflow={'ellipsis'}
          >
            {tags.join(', ')}
          </Typography>
        )}
        {publishDate && (
          <Typography
            component={'span'}
            color={'text.secondary'}
            variant="body1"
            sx={{ fontSize: '0.75rem' }}
          >
            {format(new Date(publishDate), "M'.'d'.'yyyy")}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
