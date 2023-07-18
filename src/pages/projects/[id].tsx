import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProjectDatum, getProject, getAllProjectIds } from '@/lib/projects';

export interface ProjectPageParams extends ParsedUrlQuery {
  id: string,
}

export const getStaticPaths: GetStaticPaths<ProjectPageParams> = async () => {
  const ids = await getAllProjectIds();
  return {
    paths: ids.map(id => ({ params: { id } })),
    fallback: false,
  };
};


export interface ProjectPageProps {
  data: ProjectDatum
}


export const getStaticProps: GetStaticProps<
  ProjectPageProps,
  ProjectPageParams
> = async ({ params }) => {
  const projectDatum = await getProject(params!.id);
  return { props: { data: projectDatum, } };
};



const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default ProjectPage;