import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import MDXContent from '@/components/MDXContent'
import WorkPostHero from '@/components/work/WorkPostHero'
import {
  getWorkPostIds,
  getWorkPost,
  WorkPost,
  WorkPostDatum,
  getWorkPostDatum,
} from '@/api/workPosts'

export interface WorkPostPageParams extends ParsedUrlQuery {
  postId: string
}

export const getStaticPaths: GetStaticPaths<WorkPostPageParams> = async () => {
  const postIds = getWorkPostIds()
  const paths = postIds.map((postId) => ({ params: { postId } }))
  return {
    paths,
    fallback: false,
  }
}

export interface WorkPostPageProps {
  workPost: WorkPost
  recommendedWorkPostData: WorkPostDatum[]
}

export const getStaticProps: GetStaticProps<
  WorkPostPageProps,
  WorkPostPageParams
> = async ({ params }) => {
  const workPost = await getWorkPost(params!.postId)

  // calculate recommendations here
  const postIds = getWorkPostIds()
  const postIdsIndex = postIds.findIndex((postId) => params!.postId)

  //  revolving slice
  const recommendedPostIds = postIds.slice(
    (postIdsIndex + 1) % postIds.length,
    (postIdsIndex + 1 + 3) % postIds.length
  )

  const recommendedWorkPostData = recommendedPostIds.map(getWorkPostDatum)

  return {
    props: {
      workPost,
      recommendedWorkPostData,
    },
  }
}

export default function WorkPostPage({
  workPost,
  recommendedWorkPostData,
}: WorkPostPageProps) {
  return (
    <>
      <Head>
        <title>{`${workPost.datum.title} - Viet Tran`}</title>
      </Head>
      <WorkPostHero postDatum={workPost.datum} />
      {workPost.mdxSource && <MDXContent mdxSource={workPost.mdxSource} />}
      <Section>
        <WorkPostGrid postData={recommendedWorkPostData} trim />
      </Section>
    </>
  )
}
