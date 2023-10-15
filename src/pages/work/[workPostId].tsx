import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
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
  workPostId: string
}

export const getStaticPaths: GetStaticPaths<WorkPostPageParams> = async () => {
  const workPostIds = getWorkPostIds()
  const paths = workPostIds.map((workPostId) => ({
    params: { workPostId },
  }))
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
  const workPost = await getWorkPost(params!.workPostId)

  // calculate recommendations here
  const workPostIds = getWorkPostIds().reverse()
  const workPostIdsIndex = workPostIds.findIndex(
    (workPostId) => workPostId === params!.workPostId
  )

  // calculating slices for a rotation where our postIndexId is the last
  // we can start taking from the start for the recommendations
  const startingSlice = workPostIds.slice(0, workPostIdsIndex + 1)
  const endingSlice = workPostIds.slice(
    workPostIdsIndex + 1,
    workPostIds.length
  )

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
      <NextSeo
        title={`Work • ${workPost.datum.title}`}
        description={`${workPost.datum.title} by Viet Tran.`}
      />
      <article>
        <WorkPostHero postDatum={workPost.datum} />
        {workPost.mdxSource && <MDXContent mdxSource={workPost.mdxSource} />}
        <Section>
          <WorkPostGrid postData={recommendedWorkPostData} trim />
        </Section>
      </article>
    </>
  )
}
