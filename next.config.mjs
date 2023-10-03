import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import rehypeColorChips from 'rehype-color-chips'
import rehypeSlug from 'rehype-slug'
import mdx from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';

// bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// jsx loader
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkUnwrapImages,
      remarkFrontmatter,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [rehypeHighlight, rehypeColorChips, rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

export default withPlugins([
  withMDX,
  withBundleAnalyzer,
], nextConfig);