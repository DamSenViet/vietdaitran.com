import NextImage from 'next/image'
import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from '@mui/material'

export interface WorkGridItemProps {
  src: ImageProps['src']
  alt?: ImageProps['alt']
}

const Image = styled(NextImage)({})

export default function WorkGridItem({
  src,
  alt = 'Image preview',
}: WorkGridItemProps) {
  return (
    <Grid item xs={6} md={4}>
      <Card raised={false} sx={{ background: 'transparent' }}>
        <CardActionArea>
          <Image
            src={src}
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
            A test in the projects of Harlem
          </Typography>
          <Typography
            component={'p'}
            color={'text.secondary'}
            variant={'body2'}
            textOverflow={'ellipsis'}
          >
            Branding, Product Design
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
