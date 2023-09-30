import NextImage from 'next/image'
import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from '@mui/material'
import { format } from 'date-fns'

export interface BlogPostGridItemProps {
  title: string
  tags?: string
  date?: Date
  src: ImageProps['src']
  alt?: ImageProps['alt']
}

const Image = styled(NextImage)({})

export default function BlogPostGridItem({
  title,
  tags,
  src,
  alt = 'Image preview',
  date,
}: BlogPostGridItemProps) {
  return (
    <Card raised={false} sx={{ background: 'transparent' }}>
      <CardActionArea>
        <Image
          src={src}
          alt={alt}
          width={200}
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 1,
          }}
        />
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
            {tags}
          </Typography>
        )}
        {date && (
          <Typography
            component={'span'}
            color={'text.secondary'}
            variant="body1"
            sx={{ fontSize: '0.75rem' }}
          >
            {format(date, "M'.'d'.'yyyy")}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
