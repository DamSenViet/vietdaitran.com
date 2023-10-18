import { Box, Typography } from '@mui/material'
import { getYear } from 'date-fns'
import sectionPadding from '@/components/constants/sectionPadding'

export default function FooterCopyright() {
  const currentYear = getYear(new Date())
  return (
    <Box sx={{ ...sectionPadding, flexGrow: 1 }}>
      <Typography color="text.secondary" variant="body2">
        © {currentYear} Viet Tran
      </Typography>
    </Box>
  )
}
