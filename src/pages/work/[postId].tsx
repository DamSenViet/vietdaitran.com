import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { MDXRemote } from 'next-mdx-remote'
import Section from '@/components/Section'
import { getAllWorkPostIds, getWorkPost, WorkPost } from '@/api/workPosts'

export interface WorkPostPageParams extends ParsedUrlQuery {
  postId: string
}

export const getStaticPaths: GetStaticPaths<WorkPostPageParams> = async () => {
  const postIds = await getAllWorkPostIds()
  const paths = postIds.map((postId) => ({ params: { postId } }))
  return {
    paths,
    fallback: false,
  }
}

export interface WorkPostPageProps extends WorkPost {}

export const getStaticProps: GetStaticProps<
  WorkPostPageProps,
  WorkPostPageParams
> = async ({ params }) => {
  const project = await getWorkPost(params!.postId)
  return { props: project }
}

export default function WorkPostPage({ content }: WorkPostPageProps) {
  return (
    <>
      <Section>
        <MDXRemote {...content.serialized} components={{}} />
      </Section>
    </>
  )
}
