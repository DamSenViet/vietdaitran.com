/** The duration of an animation step in seconds. */
export const stepDuration = 0.3

export const staggerDelay = 0.05

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
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { delay: totalDelay, duration: stepDuration },
  }
}

export const movingFade = createMovingFade()
