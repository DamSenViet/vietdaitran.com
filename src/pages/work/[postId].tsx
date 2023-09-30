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
import Section from '@/components/Section'
import WorkPostGrid from '@/components/work/WorkPostGrid'

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
  const postIds = getWorkPostIds().reverse()
  const postIdsIndex = postIds.findIndex((postId) => postId === params!.postId)

  // calculating slices for a rotation where our postIndexId is the last
  // we can start taking from the start for the recommendations
  const startingSlice = postIds.slice(0, postIdsIndex + 1)
  const endingSlice = postIds.slice(postIdsIndex + 1, postIds.length)

  const recommendedPostIds = [...endingSlice, ...startingSlice].slice(0, 3)
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
