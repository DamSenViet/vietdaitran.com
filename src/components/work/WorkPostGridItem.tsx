import NextImage from 'next/image'
import NextLink from 'next/link'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from '@mui/material'
import { WorkPostDatum } from '@/api/workPosts'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export interface WorkPostGridItemProps extends WorkPostDatum {
  stagger?: number
}

const Image = styled(NextImage)({})

export default function WorkPostGridItem({
  id,
  title,
  tags,
  previewImg,
  stagger = 0,
}: WorkPostGridItemProps) {
  return (
    <Card
      component={motion.div}
      {...useMovingFade({ stagger })}
      sx={{ background: 'transparent' }}
    >
      <CardActionArea>
        <NextLink href={`/work/${id}`}>
          <Image
            src={previewImg}
            height={500}
            width={500}
            alt={title}
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
          '&:last-child': {
            padding: 0,
          },
          marginTop: 2,
        }}
      >
        <Typography
          component={'p'}
          color={'text.primary'}
          variant="subtitle1"
          textOverflow={'break-word'}
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
      </CardContent>
    </Card>
  )
}
