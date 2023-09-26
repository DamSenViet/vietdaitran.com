import Head from 'next/head'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'
import HeroWorks from '@/components/work/HeroWorks'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Work - Viet Tran</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <AppMain>
        <HeroWorks />
      </AppMain>
    </>
  )
}
