import { Stack } from '@mui/material'
import FooterNav from '@/components/footer/FooterNav'
import FooterCopyright from '@/components/footer/FooterCopyright'

export default function AppFooter() {
  return (
    <Stack component={'footer'} sx={{ flexGrow: 1 }}>
      <FooterNav />
      <FooterCopyright />
    </Stack>
  )
}
