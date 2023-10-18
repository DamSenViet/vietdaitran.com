import useSplash from './useSplash'

/**
 * Generates splash screen aware delay value.
 */
export default function useSplashDelay() {
  const { splashed, splashDuration } = useSplash()
  return !splashed ? splashDuration : 0
}
