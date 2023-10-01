import { NextSeo } from 'next-seo'
import HeroBlog from '@/components/blog/HeroBlog'
import BlogShowcase from '@/components/blog/BlogShowcase'

export default function Blog() {
  return (
    <>
      <NextSeo
        title="Blog"
        description="The blog of Viet Tran, Creative Developer"
      />
      <HeroBlog />
      <BlogShowcase />
    </>
  )
}
