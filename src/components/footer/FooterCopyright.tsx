import { Box, Typography } from '@mui/material'
import { getYear } from 'date-fns'

export default function FooterCopyright() {
  const currentYear = getYear(new Date())
  return (
    <Box sx={{ padding: 4 }}>
      <Typography color="text.secondary" variant="body2">
        © {currentYear} Viet Tran
      </Typography>
    </Box>
  )
}
