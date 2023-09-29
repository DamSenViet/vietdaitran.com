/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import { pickBy, isString } from 'lodash'

/** All possible front matter properties after extraction. */
export interface Frontmatter {
  name: string
  previewUrl?: string
  startDate?: string
  endDate: string
  hidden?: boolean
}

export interface WorkPostDatum extends Frontmatter {
  id: string
}

export interface WorkPostContent {
  scope: Record<string, string>
  serialized: MDXRemoteSerializeResult<Frontmatter, Frontmatter>
}

export interface WorkPost {
  datum: WorkPostDatum
  content: WorkPostContent
}

const getBasename = (filename: string) => filename.replace(/\.mdx$/, '')

const resolvedDate = (project: WorkPostDatum) =>
  new Date(project.endDate) || new Date(project?.startDate || '2000-01-01')

const sort = (a: WorkPostDatum, b: WorkPostDatum) => {
  if (resolvedDate(a) === resolvedDate(b)) return 0
  else if (resolvedDate(a) < resolvedDate(b)) return 1
  else return -1
}

export const projectsDirectory = path.join(
  process.cwd(),
  'src',
  'posts',
  'work'
)

export const getAllWorkPostIds = async () => {
  // the basename of the filename serves as the id
  const filenames = fs
    .readdirSync(projectsDirectory)
    .filter((filename) => filename.match(/\.mdx$/))
  return filenames.map(getBasename)
}

// full individual project data
export const getWorkPost = async (id: string): Promise<WorkPost> => {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the project metadata section
  // we can treat it as a db using these...
  const matterResult = matter(fileContents)
  const frontmatter = matterResult.data as Frontmatter

  const scope = pickBy(frontmatter, isString)
  const serialized = await serialize<Frontmatter, Frontmatter>(fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight],
    },
    scope,
  })

  // Combine the data with the id and markdown
  return {
    datum: {
      id: id,
      ...frontmatter,
    },
    content: {
      scope,
      serialized,
    },
  }
}
