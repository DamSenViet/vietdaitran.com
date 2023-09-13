import { Box, Container, Stack, Typography } from '@mui/material'
import containerSx from '@/components/constants/containerSx'

const services = [
  {
    name: 'Software Engineering',
    description: `I merge digital technologies, user experience, and design principles to create easy to use digital products. I immerse myself in understanding my users' needs and goals to conceptualize intuitive interfaces for websites and applications.`,
  },
  {
    name: 'UI / UX Design',
    description: `I bring ideas to life through interactive and dynamic prototypes. I specialize in translating conceptual designs into tangible experiences that showcase functionality, user flows, and interactions creating a realistic preview of the final product.`,
  },
  {
    name: 'Full Stack Development',
    description: `I develop both client-side UI and server-side APIs leveraging a growing knowledge of existing and emerging frameworks. I'm well versed in both frontend and backend stacks including emerging frameworks across a variety of languages.`,
  },
]

interface ServiceProps {
  name: string
  description: string
}

const ServiceItems = ({ name, description }: ServiceProps) => {
  return (
    <Box
      flex="1 0 0"
      sx={{
        paddingRight: {
          xs: 1,
          md: 1.5,
          lg: 4,
        },
      }}
    >
      <Typography component={'h3'} variant="h6" sx={{ fontSize: '1.125rem' }}>
        {name}
      </Typography>
      <Typography
        color="text.secondary"
        variant="body2"
        sx={{ marginTop: 0.5 }}
      >
        {description}
      </Typography>
    </Box>
  )
}

export default function Services() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={(theme) => ({
        ...containerSx,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <Stack
        useFlexGap
        rowGap={{
          xs: 12,
          md: 16,
          lg: 21,
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={'space-between'}
          useFlexGap
          rowGap={4}
          columnGap={3}
        >
          <Box flex={'1 0 0'}>
            <Typography color="text.secondary" component={'h2'} variant="body1">
              Services
            </Typography>
          </Box>
          <Box flex={'2 0 0'}>
            <Typography
              component={'p'}
              variant="h5"
              sx={{ letterSpacing: -0.5 }}
            >
              I’m a software engineer with 3+ years of experience in software
              development, focused on improving interaction and activities for
              the communities I participate in.
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          useFlexGap
          rowGap={4}
          columnGap={3}
        >
          {services.map((service) => (
            <ServiceItems key={service.name} {...service} />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
