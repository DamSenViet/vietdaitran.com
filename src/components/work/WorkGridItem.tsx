import NextImage from 'next/image'
import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from '@mui/material'

export interface WorkGridItemProps {
  title: string
  tags?: string
  src: ImageProps['src']
  alt?: ImageProps['alt']
}

const Image = styled(NextImage)({})

export default function WorkGridItem({
  title,
  tags,
  src,
  alt = 'Image preview',
}: WorkGridItemProps) {
  return (
    <Card raised={false} sx={{ background: 'transparent' }}>
      <CardActionArea>
        <Image
          src={src}
          width={200}
          alt={alt}
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
            {tags}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
