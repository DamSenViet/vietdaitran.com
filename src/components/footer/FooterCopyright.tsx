import { Box, Typography } from '@mui/material'
import { getYear } from 'date-fns'
import sectionPadding from '@/components/constants/sectionPadding'
import { motion } from 'framer-motion'
import useMovingFade from '@/hooks/useMovingFade'

export default function FooterCopyright() {
  const currentYear = getYear(new Date())
  return (
    <Box
      component={motion.div}
      {...useMovingFade()}
      sx={{ ...sectionPadding, flexGrow: 1, overflow: 'hidden' }}
    >
      <Typography color="text.secondary" variant="body2">
        © {currentYear} Viet Tran
      </Typography>
    </Box>
  )
}
