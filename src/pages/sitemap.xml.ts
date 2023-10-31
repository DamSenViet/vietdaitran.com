import { GetServerSideProps } from 'next'
import { XMLBuilder } from 'fast-xml-parser'
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

// READ THIS FOR BUILDING UP THE SITEMAP OBJ
// https://www.sitemaps.org/protocol.html
const xmlBuilder = new XMLBuilder({
  suppressEmptyNode: true,
  attributeNamePrefix: '@@',
  ignoreAttributes: false,
  format: true,
})

// `getServerSideProps` lets us use
export const getServerSideProps: GetServerSideProps = async function ({ res }) {
  const workPostIds = getWorkPostIds().reverse()
  const blogPostIds = getBlogPostIds().reverse()

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n'
  const xmlString = xmlBuilder.build({
    urlset: {
      '@@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      urls: [
        ...internalRoutes.map((route) => ({
          url: {
            loc: `${baseUrl}${route.href}`,
            priority: 0.5,
            changefreq: 'monthly',
          },
        })),
        // blogs
        ...blogPostIds.map((blogPostId) => ({
          url: {
            loc: `${baseUrl}/blog/${blogPostId}`,
            priority: 0.5,
            changefreq: 'daily',
          },
        })),
        // works
        ...workPostIds.map((workPostId) => ({
          url: {
            loc: `${baseUrl}/work/${workPostId}`,
            priority: 0.5,
            changefreq: 'daily',
          },
        })),
      ],
    },
  })

  res.setHeader('Content-Type', 'text/xml')
  res.write(`${xmlHeader}${xmlString}`)
  // res.write(sitemap)
  res.end()
  // noop return to
  return { props: {} }
}

// response will be over before this fn runs
// still need this export since nextjs relies on it to detect routes
export default function SiteMap() {}
