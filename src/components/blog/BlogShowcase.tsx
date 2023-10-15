import Section from '../Section'
import BlogPostGrid from './BlogPostGrid'
import profile2018 from '@/assets/2018 Profile.jpg'

const articles = new Array(4).fill(0).map((_, i) => ({
  id: i.toString(),
  title: `Design Ethics in the Age of Big Data (${i + 1})`,
  tags: ['Branding', 'Design'],
  previewImg: profile2018.src,
  publishDate: `2000-01-0${i + 1}`,
}))

export default function BlogShowcase() {
  return (
    <Section>
      <BlogPostGrid postData={articles} />
    </Section>
  )
}
