import NextLink from 'next/link'
import { Container, Link, Stack, Grid, Typography } from '@mui/material'
import WorkGridItem from '@/components/work/WorkGridItem'
import profile2018 from '@/assets/2018 Profile.jpg'
import testImage from '@/assets/2023 Profile.jpg'

export default function WorkPreview() {
  return (
    <Container
      disableGutters
      sx={(theme) => ({
        padding: 4,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
      })}
    >
      <Stack
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        rowGap={7}
        justifyContent={'space-between'}
        alignItems={{
          xs: 'flex-start',
          md: 'flex-end',
        }}
      >
        <Typography
          component={'h2'}
          sx={{ typography: { xs: 'h3', md: 'h2' } }}
        >
          Work
          <Typography
            color="text.secondary"
            component={'sup'}
            variant={'body1'}
            sx={{ ml: 0.5, verticalAlign: 'top' }}
          >
            (Project count Here)
          </Typography>
        </Typography>
        <Stack
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={{
            xs: '100%',
            md: '35%',
          }}
        >
          <Typography color="text.secondary">Selected projects</Typography>
          <Link
            component={NextLink}
            href={'/work'}
            color="text.primary"
            underline="hover"
          >
            <Typography>View all</Typography>
          </Link>
        </Stack>
      </Stack>
      <Grid
        container
        columnSpacing={{
          xs: 2,
          md: 3,
        }}
        rowGap={5}
        sx={{
          marginTop: {
            xs: 2,
            md: 11,
          },
        }}
      >
        <WorkGridItem src={profile2018} />
        <WorkGridItem src={testImage} />
        <WorkGridItem src={profile2018} />
        <WorkGridItem src={profile2018} />
        <WorkGridItem src={profile2018} />
        <WorkGridItem src={profile2018} />
      </Grid>
    </Container>
  )
}
