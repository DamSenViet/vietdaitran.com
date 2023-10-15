import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import HeroBlog from '@/components/blog/HeroBlog'
import BlogShowcase from '@/components/blog/BlogShowcase'
import {
  getBlogPostDatum,
  getBlogPostIds,
  BlogPostDatum,
} from '@/api/blogPosts'

export interface BlogPageProps {
  postData: BlogPostDatum[]
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const postIds = getBlogPostIds().reverse()
  const postData = postIds.map(getBlogPostDatum)
  return {
    props: {
      postData,
    },
  }
}

export default function Blog({ postData }: BlogPageProps) {
  return (
    <>
      <NextSeo
        title="Blog"
        description="The blog of Viet Tran, Creative Developer"
      />
      <HeroBlog totalPostCount={postData.length} />
      <BlogShowcase postData={postData} />
    </>
  )
}
