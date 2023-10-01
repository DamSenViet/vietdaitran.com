import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/createEmotionCache'
import ThemeContext from '@/providers/ThemeContext'
import DefaultLayout from '@/layout/DefaultLayout'
import '@/styles/global.css'
import '@/styles/highlight-dark.scss'
import '@/styles/highlight-light.scss'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function MyApp({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/* NextSeo can't add viewport meta without duplicating it. Will keep it in Head. */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext>
        <DefaultLayout>
          <DefaultSeo
            titleTemplate="Viet Tran • %s"
            defaultTitle="Viet Tran • Creative Developer"
            description="The personal website of Viet Tran, Creative Developer."
          />
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeContext>
    </CacheProvider>
  )
}
