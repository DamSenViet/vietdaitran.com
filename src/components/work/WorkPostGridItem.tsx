import NextImage from 'next/image'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from '@mui/material'
import { WorkPostDatum } from '@/api/workPosts'

export interface WorkPostGridItemProps extends WorkPostDatum {
  tags?: string
}

const Image = styled(NextImage)({})

export default function WorkPostGridItem({
  title,
  tags,
  previewImg,
}: WorkPostGridItemProps) {
  return (
    <Card raised={false} sx={{ background: 'transparent' }}>
      <CardActionArea>
        <Image
          src={previewImg}
          height={1000}
          width={200}
          alt={title}
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
