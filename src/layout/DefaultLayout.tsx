import React from 'react'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'
import SplashScreen from '@/components/SplashScreen'

export interface DefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <SplashScreen />
      <AppHeader />
      <AppMain>{children}</AppMain>
    </>
  )
}
