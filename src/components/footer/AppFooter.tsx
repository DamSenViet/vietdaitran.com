import { Container } from '@mui/material'
import FooterNav from '@/components/footer/FooterNav'
import FooterCopyright from '@/components/footer/FooterCopyright'
import containerSx from '@/components/constants/containerSx'

export default function AppFooter() {
  return (
    <Container
      component={'footer'}
      disableGutters
      maxWidth={false}
      sx={(theme) => ({
        maxWidth: containerSx.maxWidth,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <FooterNav />
      <FooterCopyright />
    </Container>
  )
}
