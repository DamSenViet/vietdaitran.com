import { Box } from '@mui/material'
import PostGridItem, { PostGridItemProps } from './PostGridItem'

export interface PostGridProps {
  articles?: PostGridItemProps[]
}

export default function PostGrid({ articles = [] }: PostGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        alignItems: 'flex-start',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
        columnGap: {
          xs: 2,
          md: 3,
        },
        rowGap: 5,
        marginTop: {
          xs: 2,
          md: 11,
        },
      }}
    >
      {articles.map((article) => (
        <PostGridItem key={article.title} {...article} />
      ))}
    </Box>
  )
}
