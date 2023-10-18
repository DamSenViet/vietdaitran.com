import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import rehypeColorChips from 'rehype-color-chips'
import rehypeSlug from 'rehype-slug'
import { isString, pickBy, sortBy } from 'lodash'
import { getBasename, blogPostsDirectory } from '@/utils/mdxPaths'

/** All possible front matter properties after extraction. */
export interface Frontmatter {
  title: string
  previewImg: string
  publishDate: string
  hidden?: boolean
  showcase?: boolean
  tags?: string[]
}

export interface BlogPostDatum extends Frontmatter {
  id: string
}

export interface BlogPost {
  datum: BlogPostDatum
  mdxSource: MDXRemoteSerializeResult<Frontmatter, Frontmatter>
}

export const getAllBlogPostIds = () => {
  // the basename of the filename serves as the id
  const filenames = fs
    .readdirSync(blogPostsDirectory)
    .filter((filename) => filename.match(/\.mdx$/))
  return filenames.map(getBasename)
}

export const getBlogPostFilePath = (id: string) =>
  path.join(blogPostsDirectory, `${id}.mdx`)

export const getBlogPostIds = (
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
  const postIds = getAllBlogPostIds()
  const postsData = postIds.map(getBlogPostDatum)

  return sortBy(
    postsData
      .filter((postDatum) => (visible ? postDatum.hidden !== true : true))
      .filter((postDatum) => (showcase ? postDatum.showcase : true)),
    [(postDatum) => new Date(postDatum.publishDate).getTime()]
  ).map((postDatum) => postDatum.id)
}

export const getBlogPostDatum = (id: string): BlogPostDatum => {
  const fileContents = fs.readFileSync(getBlogPostFilePath(id), 'utf8')

  // Use gray-matter to parse the project metadata section
  // we can treat it as a db using these...
  const matterResult = matter(fileContents)
  const frontmatter = matterResult.data as Frontmatter

  return {
    id: id,
    ...frontmatter,
  }
}

export const getBlogPostData = (postIds: string[]): BlogPostDatum[] =>
  postIds.map(getBlogPostDatum)

// full individual project data
export const getBlogPost = async (id: string): Promise<BlogPost> => {
  const fileContents = fs.readFileSync(getBlogPostFilePath(id), 'utf8')

  // Use gray-matter to parse the project metadata section
  // we can treat it as a db using these...
  const matterResult = matter(fileContents)
  const frontmatter = matterResult.data as Frontmatter

  const scope = pickBy(frontmatter, isString)
  const mdxSource = await serialize<Frontmatter, Frontmatter>(fileContents, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkUnwrapImages,
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
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
