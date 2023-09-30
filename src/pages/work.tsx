import { GetStaticProps } from 'next'
import Head from 'next/head'
import HeroWorks from '@/components/work/HeroWorks'
import WorksShowcase from '@/components/work/WorksShowcase'
import {
  getWorkPostDatum,
  getWorkPostIds,
  WorkPostDatum,
} from '@/api/workPosts'

export interface WorkPageProps {
  postData: WorkPostDatum[]
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  const postIds = getWorkPostIds().reverse()
  const postData = postIds.map(getWorkPostDatum)
  return {
    props: {
      postData,
    },
  }
}

export default function WorkPage({ postData }: WorkPageProps) {
  return (
    <>
      <Head>
        <title>Viet Tran • Work</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWorks />
      <WorksShowcase postData={postData} />
    </>
  )
}
