import path from 'path'

export const getBasename = (filename: string) => filename.replace(/\.mdx$/, '')

export const workPostsDirectory = path.join(
  process.cwd(),
  'src',
  'posts',
  'work'
)

export const blogPostsDirectory = path.join(
  process.cwd(),
  'src',
  'posts',
  'blog'
)
