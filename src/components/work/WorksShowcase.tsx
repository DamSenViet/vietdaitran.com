import Section from '../Section'
import WorkPostGrid from './WorkPostGrid'
import profile2018 from '@/assets/2018 Profile.jpg'

const postData = new Array(6).fill(null).map((_, i) => ({
  title: `A test in the projects of Harlem (${i})`,
  tags: 'Branding, Vision',
  src: profile2018,
}))

export default function WorksShowcase() {
  return (
    <Section>
      <WorkPostGrid postData={postData} />
    </Section>
  )
}
