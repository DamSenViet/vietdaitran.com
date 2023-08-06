import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import ThemeContext from '@/providers/ThemeContext'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createCache({ key: 'css', prepend: true })

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
        <Component {...pageProps} />
      </ThemeContext>
    </CacheProvider>
  )
}
