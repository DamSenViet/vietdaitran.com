import { GetServerSideProps } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { getBlogPostIds } from '@/api/blogPosts'
import { getWorkPostIds } from '@/api/workPosts'

const baseUrl = 'https://www.vietdaitran.com'

const internalRoutes = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

// `getServerSideProps` lets us pilot the response directly
export const getServerSideProps: GetServerSideProps = async function ({ res }) {
  const workPostIds = getWorkPostIds().reverse()
  const blogPostIds = getBlogPostIds().reverse()

  const stream = new SitemapStream({ hostname: baseUrl })

  // https://www.sitemaps.org/protocol.html
  const sitemapEntries = [
    ...internalRoutes.map((route) => ({
      url: `${baseUrl}${route.href}`,
      priority: 0.5,
      changefreq: 'monthly',
    })),
    ...workPostIds.map((workPostId) => ({
      url: `${baseUrl}/work/${workPostId}`,
      priority: 0.5,
      changefreq: 'daily',
    })),
    ...blogPostIds.map((blogPostId) => ({
      url: `${baseUrl}/blog/${blogPostId}`,
      priority: 0.5,
      changefreq: 'daily',
    })),
  ]

  const sitemapXmlStr = await streamToPromise(
    Readable.from(sitemapEntries).pipe(stream)
  )

  // end the request content early
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemapXmlStr)
  res.end()
  // noop return to satisfy type check
  return { props: {} }
}

// response will be over before this fn runs
// still need this export since nextjs relies on it to detect routes
export default function SiteMap() {}
