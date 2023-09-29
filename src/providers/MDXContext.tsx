import React from 'react'
import { MDXProvider, Props } from '@mdx-js/react/lib'

interface MDXContextProps {
  children: React.ReactNode
}

const shortCodes: Props['components'] = {}

export default function MDXContext({ children }: MDXContextProps) {
  return <MDXProvider components={shortCodes}>{children}</MDXProvider>
}
