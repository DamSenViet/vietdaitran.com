import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/createEmotionCache'
import ThemeContext from '@/providers/ThemeContext'
import DefaultLayout from '@/layout/DefaultLayout'
import '@/styles/global.css'

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
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContext>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeContext>
    </CacheProvider>
  )
}
