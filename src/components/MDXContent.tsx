import { MDXRemote } from 'next-mdx-remote'
import { Container } from '@mui/material'
import { WorkPost } from '@/api/workPosts'
import Section from './Section'
import mdxShortcodes from '@/component-helpers/mdxShortcodes'

export interface MDXContentProps {
  mdxSource: WorkPost['mdxSource']
}

export default function MDXContent({ mdxSource }: MDXContentProps) {
  return (
    <Section>
      <Container
        maxWidth="md"
        disableGutters
        sx={{
          display: 'grid',
          rowGap: 2,
          '&>*:first-child': {
            marginTop: '0 !important',
          },
        }}
      >
        <MDXRemote {...mdxSource} components={mdxShortcodes} />
      </Container>
    </Section>
  )
}
