import { Box } from '@mui/material'
import ArticleGridItem, { ArticleGridItemProps } from './ArticleGridItem'

export interface ArticleGridProps {
  articles?: ArticleGridItemProps[]
}

export default function ArticleGrid({ articles = [] }: ArticleGridProps) {
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
        <ArticleGridItem key={article.title} {...article} />
      ))}
    </Box>
  )
}
