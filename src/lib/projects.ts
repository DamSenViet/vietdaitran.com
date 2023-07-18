import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

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
  contentHtml: string,
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

export const projectsDirectory = path.join(process.cwd(), 'src', 'projects');

export const getAllProjectIds = async () => {
  // the basename of the filename serves as the id
  const filenames = fs.readdirSync(projectsDirectory);
  // should maybe filter here
  return filenames.map(getBasename);
}

// full individual project data
export const getProject = async (id: string): Promise<ProjectDatum> => {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString('utf8');

  // Combine the data with the id and contentHtml
  return {
    id: id,
    contentHtml,
    ...matterResult.data as ProjectMetadata,
  };
}