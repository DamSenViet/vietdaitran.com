import useSplashDelay from './useSplashDelay'
import {
  CreateMovingFadeConfig,
  createMovingFade,
  createMovingFadeConfigDefaults,
} from '@/utils/animation'

export default function useMovingFade({
  stagger = createMovingFadeConfigDefaults.stagger,
  amount = createMovingFadeConfigDefaults.amount,
}: CreateMovingFadeConfig = createMovingFadeConfigDefaults) {
  return createMovingFade({
    delay: useSplashDelay(),
    stagger,
    amount,
  })
}
