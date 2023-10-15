import React from 'react'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'
import SplashScreen from '@/components/SplashScreen'

export interface DefaultLayoutProps {
  children: React.ReactNode
  omitFooter?: boolean
}

export default function DefaultLayout({
  children,
  omitFooter = false,
}: DefaultLayoutProps) {
  return (
    <>
      <SplashScreen />
      <AppHeader />
      <AppMain omitFooter={omitFooter}>{children}</AppMain>
    </>
  )
}
