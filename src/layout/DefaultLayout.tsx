import React from 'react'
import AppHeader from '@/components/header/AppHeader'
import AppMain from '@/components/AppMain'

export interface DefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <AppHeader />
      <AppMain>{children}</AppMain>
    </>
  )
}
