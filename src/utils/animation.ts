import { MotionProps } from 'framer-motion'
/** The duration of an animation step in seconds. */
export const stepDuration = 0.3

export const staggerDelay = 0.075

export interface CreateMovingFadeConfig {
  delay?: number
  stagger?: number
  amount?: Required<MotionProps>['viewport']['amount']
}

export const createMovingFadeConfigDefaults: Required<CreateMovingFadeConfig> =
  {
    delay: 0,
    stagger: 0,
    amount: 0.4,
  }

export const createMovingFade = ({
  delay = createMovingFadeConfigDefaults.delay,
  stagger = createMovingFadeConfigDefaults.stagger,
  amount = createMovingFadeConfigDefaults.amount,
}: CreateMovingFadeConfig = createMovingFadeConfigDefaults) => {
  const yOffset = 48
  const totalDelay = delay + stagger * staggerDelay
  return {
    initial: { y: -yOffset, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: {
      once: true,
      amount: amount,
      rootMargin: `0px`,
      margin: `${0}px`,
    },
    transition: { delay: totalDelay, duration: stepDuration },
  }
}

export const movingFade = createMovingFade()
