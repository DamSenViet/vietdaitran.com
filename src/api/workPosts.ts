import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import rehypeColorChips from 'rehype-color-chips'
import rehypeSlug from 'rehype-slug'
import { isString, pickBy, sortBy } from 'lodash'
import { getBasename, workPostsDirectory } from '@/utils/mdxFs'

/** All possible front matter properties after extraction. */
export interface Frontmatter {
  title: string
  previewImg: string
  startDate?: string
  endDate: string
  audience: string
  service: string
  sector: string
  hidden?: boolean
  showcase?: boolean
  tags?: string[]
}

export interface WorkPostDatum extends Frontmatter {
  id: string
}

export interface WorkPost {
  datum: WorkPostDatum
  mdxSource: MDXRemoteSerializeResult<Frontmatter, Frontmatter>
}

export const getAllWorkPostIds = () => {
  // the basename of the filename serves as the id
  const filenames = fs
    .readdirSync(workPostsDirectory)
    .filter((filename) => filename.match(/\.mdx$/))
  return filenames.map(getBasename)
}

export const getWorkPostFilePath = (id: string) =>
  path.join(workPostsDirectory, `${id}.mdx`)

export const getWorkPostIds = (
  {
    visible = true,
    showcase = false,
  }: {
    visible?: boolean
    showcase?: boolean
  } = {
    visible: true,
    showcase: false,
  }
) => {
  const postIds = getAllWorkPostIds()
  const postsData = postIds.map(getWorkPostDatum)

  const resolvedDate = (workPostDatum: WorkPostDatum) =>
    new Date(workPostDatum.endDate) ||
    new Date(workPostDatum?.startDate || '2000-01-01')

  return sortBy(
    postsData
      .filter((postDatum) => (visible ? postDatum.hidden !== true : true))
      .filter((postDatum) => (showcase ? postDatum.showcase : true)),
    [(postDatum) => resolvedDate(postDatum).getTime()]
  ).map((postDatum) => postDatum.id)
}

export const getWorkPostDatum = (id: string): WorkPostDatum => {
  const fileContents = fs.readFileSync(getWorkPostFilePath(id), 'utf8')

  // Use gray-matter to parse the project metadata section
  // we can treat it as a db using these...
  const matterResult = matter(fileContents)
  const frontmatter = matterResult.data as Frontmatter

  return {
    id: id,
    ...frontmatter,
  }
}

export const getWorkPostData = (postIds: string[]): WorkPostDatum[] =>
  postIds.map(getWorkPostDatum)

// full individual project data
export const getWorkPost = async (id: string): Promise<WorkPost> => {
  const fileContents = fs.readFileSync(getWorkPostFilePath(id), 'utf8')

  // Use gray-matter to parse the project metadata section
  // we can treat it as a db using these...
  const matterResult = matter(fileContents)
  const frontmatter = matterResult.data as Frontmatter

  const scope = pickBy(frontmatter, isString)
  const mdxSource = await serialize<Frontmatter, Frontmatter>(fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight, rehypeColorChips, rehypeSlug],
    },
    scope,
  })

  // Combine the data with the id and markdown
  return {
    datum: {
      id: id,
      ...frontmatter,
    },
    mdxSource,
  }
}
