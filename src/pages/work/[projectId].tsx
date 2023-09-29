import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { MDXRemote } from 'next-mdx-remote'
import Section from '@/components/Section'
import { getAllProjectIds, getProject, Project } from '@/lib/projects'

export interface WorkPageParams extends ParsedUrlQuery {
  projectId: string
}

export const getStaticPaths: GetStaticPaths<WorkPageParams> = async () => {
  const projectIds = await getAllProjectIds()
  const paths = projectIds.map((projectId) => ({ params: { projectId } }))
  return {
    paths,
    fallback: false,
  }
}

export interface WorkPageProps extends Project {}

export const getStaticProps: GetStaticProps<
  WorkPageProps,
  WorkPageParams
> = async ({ params }) => {
  const project = await getProject(params!.projectId)
  return { props: project }
}

export default function WorkPage({ content }: WorkPageProps) {
  return (
    <>
      <Section>
        <MDXRemote {...content.serialized} components={{}} />
      </Section>
    </>
  )
}
