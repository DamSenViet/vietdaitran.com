import Head from 'next/head'
import HeroAbout from '@/components/about/HeroAbout'
import Overview from '@/components/about/Overview'
import Experience from '@/components/about/Experience'

export default function About() {
  return (
    <>
      <Head>
        <title>Viet Tran • About</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroAbout />
      <Overview />
      <Experience />
    </>
  )
}
