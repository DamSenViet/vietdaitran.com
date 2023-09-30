import Section from '../Section'
import WorkPostGrid, { WorkPostGridProps } from './WorkPostGrid'

export interface WorksShowcaseProps extends WorkPostGridProps {}

export default function WorksShowcase({ postData }: WorksShowcaseProps) {
  return (
    <Section>
      <WorkPostGrid postData={postData} />
    </Section>
  )
}
