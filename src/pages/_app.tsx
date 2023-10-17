import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/createEmotionCache'
import Providers from '@/providers'
import DefaultLayout from '@/layout/DefaultLayout'
import { Page } from 'page'
import '@/styles/global.css'
import '@/styles/highlight-dark.scss'
import '@/styles/highlight-light.scss'
import 'react-medium-image-zoom/dist/styles.css'
import '@/styles/react-medium-image-zoom-overrides.scss'

export interface MyAppProps extends AppProps {
  Component: Page
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function MyApp({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const Layout = Component.layout ?? DefaultLayout
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/* NextSeo can't add viewport meta without duplicating it. Will keep it in Head. */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Providers>
        <Layout>
          <DefaultSeo
            titleTemplate="Viet Tran • %s"
            defaultTitle="Viet Tran • Creative Developer"
            description="The personal website of Viet Tran, Creative Developer."
          />
          {getLayout(<Component {...pageProps} />)}
        </Layout>
      </Providers>
    </CacheProvider>
  )
}
