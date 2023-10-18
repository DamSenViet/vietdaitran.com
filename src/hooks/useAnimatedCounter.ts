import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import { stepDuration } from '@/utils/animation'

const useAnimatedCounter = (
  maxValue: number,
  initialValue = 0,
  duration = stepDuration,
  delay = 0
) => {
  const [counter, setCounter] = useState<number>(initialValue)
  useEffect(() => {
    const controls = animate(initialValue, maxValue, {
      duration,
      delay,
      onUpdate(value) {
        setCounter(value)
      },
    })
    return () => controls.stop()
  }, [initialValue, maxValue, duration, delay])

  return counter
}

export default useAnimatedCounter
