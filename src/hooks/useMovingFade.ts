import useSplashDelay from './useSplashDelay'
import { createMovingFade } from '@/utils/animation'

export default function useMovingFade(stagger: number = 0) {
  return createMovingFade({
    delay: useSplashDelay(),
    stagger,
  })
}
