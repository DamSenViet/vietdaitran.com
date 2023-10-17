import React from 'react'
import { SplashDispatchContext } from '@/context/splash'

interface SplashContextProps {
  children: React.ReactNode
}

export default function SplashProvider({ children }: SplashContextProps) {
  return (
    <SplashDispatchContext.Provider
      value={{
        splashed: React.useState(false),
        splashDuration: React.useState(999),
      }}
    >
      {children}
    </SplashDispatchContext.Provider>
  )
}
