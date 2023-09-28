import Head from 'next/head'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'
import HeroAbout from '@/components/about/HeroAbout'
import Overview from '@/components/about/Overview'
import Experience from '@/components/about/Experience'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Viet Tran</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <AppMain>
        <HeroAbout />
        <Overview />
        <Experience />
      </AppMain>
    </>
  )
}
