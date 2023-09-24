import Head from 'next/head'
import { Box, Typography } from '@mui/material'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'
import Hero from '@/components/Hero'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Viet Tran</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <AppMain>
        <Hero
          title={
            <>
              Blog
              <Typography
                color={'text.secondary'}
                component={'sup'}
                variant={'body1'}
                sx={{ ml: 0.5, verticalAlign: 'top' }}
              >
                (9)
              </Typography>
            </>
          }
          tagline={
            <>
              Learning and thoughts
              <Box
                component="br"
                sx={{ display: { xs: 'none', md: 'block' } }}
              />{' '}
              on design and tech.
            </>
          }
        />
      </AppMain>
    </>
  )
}
