import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectMetadata {
  name: string,
  icon?: string,
  hero?: string,
  startDate?: Date,
  endDate: Date,
  hidden?: boolean,
}

export interface ProjectDatum extends ProjectMetadata {
  id: string,
}

const getBasename = (filename: string) => filename.replace(/\.mdx$/, '');

const resolvedDate = (project: ProjectDatum) => (
  project?.endDate ||
  project?.startDate ||
  '2000-01-01'
)

const sort = (a: ProjectDatum, b: ProjectDatum) => {
  if (resolvedDate(a) === resolvedDate(b))
    return 0;
  else if (resolvedDate(a) < resolvedDate(b))
    return 1;
  else
    return -1;
}

export const projectsDirectory = path.join(
  process.cwd(),
  'src',
  'pages',
  'projects'
);

export const getAllProjectIds = async () => {
  // the basename of the filename serves as the id
  const filenames = fs.readdirSync(projectsDirectory)
    .filter(filename => filename.match(/\.mdx$/));
  return filenames.map(getBasename);
}

// full individual project data
export const getProject = async (id: string): Promise<ProjectDatum> => {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section
  // we can treat it as a db using these...
  const matterResult = matter(fileContents);

  // Combine the data with the id and markdown
  return {
    id: id,
    ...matterResult.data as ProjectMetadata,
  };
}