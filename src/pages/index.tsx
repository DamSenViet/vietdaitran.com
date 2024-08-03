import { GetStaticProps } from 'next'
import HeroHome from '@/components/home/HeroHome'
import WorkPreview from '@/components/home/WorkPreview'
import BlogPreview from '@/components/home/BlogPreview'
import Services from '@/components/home/Services'
import {
  getWorkPostDatum,
  getWorkPostIds,
  WorkPostDatum,
} from '@/api/workPosts'
import {
  getBlogPostDatum,
  getBlogPostIds,
  BlogPostDatum,
} from '@/api/blogPosts'

export interface HomePageProps {
  totalWorkPostCount: number
  workPostData: WorkPostDatum[]
  totalBlogPostCount: number
  blogPostData: BlogPostDatum[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const workPostIds = getWorkPostIds()
  const workPostData = workPostIds.map(getWorkPostDatum).reverse().slice(0, 3)

  const blogPostIds = getBlogPostIds()
  const blogPostData = blogPostIds.map(getBlogPostDatum).reverse().slice(0, 4)
  return {
    props: {
      totalWorkPostCount: workPostIds.length,
      workPostData,
      totalBlogPostCount: blogPostIds.length,
      blogPostData: blogPostData,
    },
  }
}

export default function HomePage({
  totalWorkPostCount,
  workPostData,
  totalBlogPostCount,
  blogPostData,
}: HomePageProps) {
  return (
    <>
      <HeroHome />
      <WorkPreview
        totalPostCount={totalWorkPostCount}
        postData={workPostData}
      />
      <BlogPreview
        totalPostCount={totalBlogPostCount}
        postData={blogPostData}
      />
      <Services />
    </>
  )
}
