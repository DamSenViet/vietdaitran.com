import { NextSeo } from 'next-seo'
import { Box, Divider, Typography } from '@mui/material'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'
import Section from '@/components/Section'

export interface ErrorPage {
  statusCode: StatusCodes
}

export default function ErrorPage({ statusCode }: ErrorPage) {
  const reasonPhrase = getReasonPhrase(statusCode)
  return (
    <>
      <NextSeo
        title={`${statusCode}: ${reasonPhrase}`}
        description={reasonPhrase}
      />
      <Section
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - var(--header-height))',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            columnGap: 2,
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            {statusCode}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderWidth: 1, borderColor: 'text.disabled' }}
          />
          <Typography>{reasonPhrase}</Typography>
        </Box>
      </Section>
    </>
  )
}
