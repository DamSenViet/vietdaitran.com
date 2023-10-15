import { NextSeo } from 'next-seo'
import HeroAbout from '@/components/about/HeroAbout'
import Overview from '@/components/about/Overview'
import Experience from '@/components/about/Experience'

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="About Viet Tran, Creative Developer"
      />
      <HeroAbout />
      <Overview />
      <Experience />
    </>
  )
}
