import React from 'react'
import { SplashDispatchContext } from '@/context/splash'

/**
 * We use this to trigger non-splash animations after the splash has played out.
 */
const maxSplashDuration = 1.65

interface SplashContextProps {
  children: React.ReactNode
}

export default function SplashProvider({ children }: SplashContextProps) {
  return (
    <SplashDispatchContext.Provider
      value={{
        splashed: React.useState(false),
        splashDuration: React.useState(maxSplashDuration),
      }}
    >
      {children}
    </SplashDispatchContext.Provider>
  )
}
