import React from 'react'
import { MotionConfig, MotionConfigContext } from 'framer-motion'
import { getGPUTier } from 'detect-gpu'

interface MotionConfigProviderProps {
  children: React.ReactNode
}

export default function MotionConfigProvider({
  children,
}: MotionConfigProviderProps) {
  // we want to detect gpu here...
  const [reducedMotion, setReducedMotion] =
    React.useState<Required<MotionConfigContext['reducedMotion']>>('user')

  // if the gpu sucks forget about it
  React.useEffect(() => {
    getGPUTier().then((gpuTier) => {
      setReducedMotion(gpuTier.tier <= 1 ? 'always' : 'user')
    })
  }, [])

  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>
}
