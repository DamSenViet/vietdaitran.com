import { GetStaticProps } from 'next'
import Hero from '@/components/home/Hero'
import WorkPreview from '@/components/home/WorkPreview'
import BlogPreview from '@/components/home/BlogPreview'
import Services from '@/components/home/Services'
import {
  getWorkPostDatum,
  getWorkPostIds,
  WorkPostDatum,
} from '@/api/workPosts'

export interface HomePageProps {
  totalWorkPostCount: number
  workPostData: WorkPostDatum[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const workPostIds = getWorkPostIds()
  const workPostData = workPostIds.map(getWorkPostDatum).reverse().slice(0, 6)
  return {
    props: {
      totalWorkPostCount: workPostIds.length,
      workPostData,
    },
  }
}

export default function HomePage({
  totalWorkPostCount,
  workPostData,
}: HomePageProps) {
  return (
    <>
      <Hero />
      <WorkPreview
        totalPostCount={totalWorkPostCount}
        postData={workPostData}
      />
      <BlogPreview />
      <Services />
    </>
  )
}
