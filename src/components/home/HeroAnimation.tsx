import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { stepDuration } from '@/utils/animation'
import useMovingFade from '@/hooks/useMovingFade'
// do all in one svg

const shapesTransition = {
  scale: {
    type: 'just',
    ease: 'linear',
    duration: stepDuration / 2,
  },
  rotate: {
    type: 'just',
    ease: 'linear',
    duration: 5,
    repeat: Infinity,
  },
  top: {
    type: 'just',
    ease: 'linear',
    duration: stepDuration / 2,
  },
  left: {
    type: 'just',
    ease: 'linear',
    duration: stepDuration / 2,
  },
}

function AnimatedShapes() {
  // container interaction states
  const [isHover, setIsHover] = React.useState(false)

  // shape animation state dervied from container interaction
  const scale = isHover ? 0.9 : 1
  const animate = { rotate: 360, scale }

  // individual shape animation state
  const whileShapeHover = { scale: 1.2 }

  const initialOffset = isHover ? 13 : 16
  const initialOffsetLength = Math.sqrt(Math.pow(initialOffset, 2) * 2)

  const createShapeAnimation = ({
    top = 0,
    left = 0,
  }: {
    top?: number
    left?: number
  }) => {
    const position = {
      top: `${50 + top}%`,
      left: `${50 + left}%`,
    }
    return {
      initial: {
        y: '-50%',
        x: '-50%',
      },
      animate: {
        ...animate,
        ...position,
      },
      whileHover: whileShapeHover,
      transition: shapesTransition,
    }
  }

  return (
    // outer grouping stops rotating div from expanding the page
    <Box
      component={motion.div}
      sx={(theme) => ({
        fill: theme.palette.text.primary,
        position: 'relative',
        overflow: 'hidden',
        width: 250,
        height: 250,
        cursor: 'pointer',
        transformOrigin: 'center center',
        borderRadius: 150,
        userSelect: 'none',
      })}
      animate={{ rotate: 360 }}
      transition={shapesTransition}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <Box
        component={motion.svg}
        viewBox="0 0 85 85"
        height={60}
        sx={{
          position: 'absolute',
          transformOrigin: 'center center',
        }}
        {...createShapeAnimation({ top: -initialOffsetLength - 8 })}
      >
        <Box component={'rect'} width={85} height={85} />
      </Box>
      <Box
        component={motion.svg}
        viewBox="0 0 100 85"
        height={60}
        sx={{
          position: 'absolute',
          transformOrigin: 'center 66%',
        }}
        {...createShapeAnimation({
          top: initialOffset,
          left: initialOffsetLength + 6.5,
        })}
      >
        <Box component={'polygon'} points="50 0, 100 85, 0 85" />
      </Box>
      <Box
        component={motion.svg}
        viewBox="0 0 85 85"
        height={60}
        sx={{
          position: 'absolute',
          transformOrigin: 'center center',
        }}
        {...createShapeAnimation({
          top: initialOffset,
          left: -initialOffsetLength - 6.5,
        })}
      >
        <Box component={'circle'} r={85 / 2} cy={'50%'} cx={'50%'} />
      </Box>
    </Box>
  )
}

export default function HeroAnimation() {
  return (
    <Box
      component={motion.div}
      {...useMovingFade({ stagger: 1 })}
      sx={{
        position: 'relative',
        flexGrow: 1,
        display: 'grid',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* when an animation is clicked, the next animation will be selected */}
      <AnimatedShapes />
    </Box>
  )
}
