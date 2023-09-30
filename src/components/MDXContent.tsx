import { MDXRemote } from 'next-mdx-remote'
import { WorkPost } from '@/api/workPosts'
import Section from './Section'
import mdxShortcodes from '@/component-helpers/mdxShortcodes'

export interface MDXContentProps {
  mdxSource: WorkPost['mdxSource']
}

export default function MDXContent({ mdxSource }: MDXContentProps) {
  return (
    <Section>
      <MDXRemote {...mdxSource} components={mdxShortcodes} />
    </Section>
  )
}
