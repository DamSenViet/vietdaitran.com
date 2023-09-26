import Head from 'next/head'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'
import HeroBlog from '@/components/blog/HeroBlog'

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
        <HeroBlog />
      </AppMain>
    </>
  )
}