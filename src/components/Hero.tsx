import { Box, Container, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Box>
      <Container
        sx={{
          mt: 40,
          minHeight: `calc(100vh - ${84}px)`,
          position: 'relative',
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 500 }}>
            Creative Developer
          </Typography>
        </Box>
        <Typography
          component={'p'}
          variant={'h6'}
          sx={(theme) => ({
            fontWeight: 400,
            color: theme.palette.text.secondary,
            marginTop: 3,
            maxWidth: 500,
          })}
        >
          Passionate about creating applications for the communities I
          participate in.
        </Typography>
      </Container>
    </Box>
  )
}
