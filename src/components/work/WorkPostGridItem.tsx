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

export interface WorkPostGridItemProps extends WorkPostDatum {}

const Image = styled(NextImage)({})

export default function WorkPostGridItem({
  id,
  title,
  tags,
  previewImg,
}: WorkPostGridItemProps) {
  return (
    <Card raised={false} sx={{ background: 'transparent' }}>
      <CardActionArea>
        <NextLink href={`/work/${id}`}>
          <Image
            src={previewImg}
            height={500}
            width={500}
            alt={title}
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
