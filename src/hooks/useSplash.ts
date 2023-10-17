import { SplashDispatchContext } from '@/context/splash'
import React from 'react'

/**
 * A hook to record splash state.
 * Includes information about whether we'll play the splash & duration.
 * @returns
 */
export default function useSplash() {
  const {
    splashed: [splashed, setSplashed],
    splashDuration: [splashDuration, setSplashDuration],
  } = React.useContext(SplashDispatchContext)
  return {
    splashed,
    splashDuration,
    setSplashDuration,
    setSplashed,
  }
}
