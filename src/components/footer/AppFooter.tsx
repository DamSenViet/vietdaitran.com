import { Container } from '@mui/material'
import FooterNav from '@/components/footer/FooterNav'
import FooterCopyright from '@/components/footer/FooterCopyright'

export default function AppFooter() {
  return (
    <Container
      component={'footer'}
      disableGutters
      sx={(theme) => ({
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <FooterNav />
      <FooterCopyright />
    </Container>
  )
}
