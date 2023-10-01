import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '@/createEmotionCache'
import { MyAppProps } from './_app'
import Favicon from '@/components/Favicon'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="stylesheet" href="/highlight-light.min.css" /> */}
          <link rel="stylesheet" href="/highlight-dark.min.css" />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// https://emotion.sh/docs/ssr
MyDocument.getInitialProps = async (ctx) => {
  const clientSideEmotionCache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(
    clientSideEmotionCache
  )

  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props: MyAppProps) {
          return <App emotionCache={clientSideEmotionCache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  }
}
