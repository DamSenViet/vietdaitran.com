import { Box, Container, Stack, Button, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Container
      disableGutters
      sx={(theme) => ({
        position: 'relative',
        paddingTop: 34,
        paddingBottom: 24,
        paddingX: 4,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
      >
        <Typography component={'span'} variant="body1" color="text.secondary">
          Intro
        </Typography>
        <Box
          sx={{
            maxWidth: { xs: 'initial', sm: 330 },
            mt: { xs: 2, sm: 0 },
            marginRight: { xs: 0, md: 8, lg: 24, xl: 32 },
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: 500 }}>
            I'm a developer building applications and tools in San Jose,
            California.
          </Typography>
          <Typography
            variant={'body1'}
            color={'text.secondary'}
            sx={{
              marginTop: 1,
              fontWeight: 400,
            }}
          >
            Passionate about empowering others to participate in their
            communities through crafted digital experiences.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/about"
            sx={{ mt: 4, borderRadius: 5, px: 2.5, pt: 0.875, pb: 1 }}
          >
            About me
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
