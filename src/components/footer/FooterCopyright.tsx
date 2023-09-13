import { Box, Typography } from '@mui/material'
import { getYear } from 'date-fns'
import containerSx from '@/components/constants/containerSx'
import { omit } from 'lodash'

export default function FooterCopyright() {
  const currentYear = getYear(new Date())
  return (
    <Box sx={{ ...omit(containerSx, ['maxWidth']) }}>
      <Typography color="text.secondary" variant="body2">
        © {currentYear} Viet Tran
      </Typography>
    </Box>
  )
}
