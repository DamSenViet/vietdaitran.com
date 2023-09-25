import { Box } from '@mui/material'
import WorkGridItem, { WorkGridItemProps } from './WorkGridItem'

export interface WorkGridProps {
  works?: WorkGridItemProps[]
}

export default function WorkGrid({ works = [] }: WorkGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
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
      {works.map((work) => (
        <WorkGridItem {...work} />
      ))}
    </Box>
  )
}
