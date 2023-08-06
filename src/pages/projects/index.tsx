import React from 'react'
import { GetStaticProps } from 'next'
import { ProjectDatum, getAllProjectIds, getProject } from '@/lib/projects'

export interface ProjectsPageProps {
  projectsData: ProjectDatum[]
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const projectIds = await getAllProjectIds()
  const projectsData = await Promise.all(projectIds.map(getProject))
  return {
    props: {
      projectsData,
    },
  }
}

const ProjectPage: React.FC<ProjectsPageProps> = ({ projectsData }) => {
  return <div></div>
}

export default ProjectPage
