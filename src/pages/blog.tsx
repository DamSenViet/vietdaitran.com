import Head from 'next/head'
import HeroBlog from '@/components/blog/HeroBlog'
import PostsShowcase from '@/components/blog/PostsShowcase'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Viet Tran</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBlog />
      <PostsShowcase />
    </>
  )
}
