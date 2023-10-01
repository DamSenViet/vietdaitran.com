import { GetStaticProps } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
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
      <NextSeo
        title="Work"
        description="The portfolio of Viet Tran, Creative Developer"
      />
      <HeroWorks />
      <WorksShowcase postData={postData} />
    </>
  )
}
