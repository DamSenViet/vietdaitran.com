import Section from '../Section'
import BlogPostGrid, { BlogPostGridProps } from './BlogPostGrid'

export interface BlogShowcaseProps extends BlogPostGridProps {}

export default function BlogShowcase({ postData }: BlogShowcaseProps) {
  return (
    <Section>
      <BlogPostGrid postData={postData} />
    </Section>
  )
}
