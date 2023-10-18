/** The duration of an animation step in seconds. */
export const stepDuration = 0.3

export const staggerDelay = 0.075

interface CreateMovingFadeConfig {
  delay?: number
  stagger?: number
}

export const createMovingFade = (
  { delay = 0, stagger = 0 }: CreateMovingFadeConfig = {
    delay: 0,
    stagger: 0,
  }
) => {
  const totalDelay = delay + stagger * staggerDelay
  return {
    initial: { y: 24, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.8 },
    transition: { delay: totalDelay, duration: stepDuration },
  }
}

export const movingFade = createMovingFade()
