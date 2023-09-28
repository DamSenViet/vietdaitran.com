import Head from 'next/head'
import HeroWorks from '@/components/work/HeroWorks'
import WorksShowcase from '@/components/work/WorksShowcase'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Work - Viet Tran</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWorks />
      <WorksShowcase />
    </>
  )
}
