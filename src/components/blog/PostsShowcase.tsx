import Section from '../Section'
import PostGrid from './PostGrid'
import profile2018 from '@/assets/2018 Profile.jpg'

const articles = new Array(4).fill(0).map((_, i) => ({
  title: `Design Ethics in the Age of Big Data (${i + 1})`,
  tags: 'Branding, Design',
  src: profile2018,
  date: new Date(),
}))

export default function PostsShowcase() {
  return (
    <Section>
      <PostGrid articles={articles} />
    </Section>
  )
}
