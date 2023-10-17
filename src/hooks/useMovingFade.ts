import useSplash from './useSplash'
import { createMovingFade, stepDuration } from '@/utils/animation'

export default function () {
  const { splashed, splashDuration } = useSplash()

  return createMovingFade({
    delay: !splashed ? splashDuration + stepDuration : 0,
  })
}
