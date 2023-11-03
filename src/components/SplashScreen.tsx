import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import useAnimatedCounter from '@/hooks/useAnimatedCounter'
import { transparentize } from 'color2k'
import useSplash from '@/hooks/useSplash'
import { stepDuration, staggerDelay } from '@/utils/animation'

// ORDER OF ANIMATION: ENTER LETTTERS, EXIT LETTERS, FADE BACKGROUND

const letterRows = 6
/**
 * Total duration of letters animating.
 */
const animationDuration = stepDuration + staggerDelay * (letterRows - 1)
const name = 'Viet Tran'
const role = 'Creative Developer'

const useAnimatedString = (str: string, duration = stepDuration) =>
  str.substring(0, Math.floor(useAnimatedCounter(str.length, 0, duration)))

function SplashScreenModal() {
  const counter = useAnimatedCounter(100, 0, animationDuration).toFixed(0)
  const animatedName = useAnimatedString(name)
  const animatedRole = useAnimatedString(role, 0)
  const animatedEllipses = useAnimatedString('...', animationDuration)

  const text = 'VIETTRAN'
  const rowObjs = new Array<string>(letterRows)
    .fill(text)
    .map((str, i) => (i % 2 ? str.split('').reverse() : str.split('')))
    .map((letters, row) => ({
      letters: letters,
      row,
    }))

  const fadeOutAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    // ending animation ends slightly early
    exit: {
      opacity: 0,
      transition: { duration: stepDuration },
    },
  }

  const letterAnimation = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -150,
    },
  }

  const backgroundAnimation = {
    initial: fadeOutAnimation.initial,
    animate: fadeOutAnimation.animate,
    exit: {
      ...fadeOutAnimation.exit,
      // wait for original animation to play out first
      transition: {
        delay: animationDuration,
        duration: stepDuration,
      },
    },
  }

  const colorBg = (
    <Box
      component={motion.div}
      {...backgroundAnimation}
      sx={(theme) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        // default bg
        background: transparentize(
          theme.palette.background.default,
          theme.palette.mode === 'light' ? 0.2 : 0.1
        ),
        backdropFilter: 'blur(10px)',
      })}
    />
  )

  const letterBg = (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        display: 'grid',
        alignContent: 'space-around',
        rowGap: 4,
      }}
    >
      {rowObjs.map(({ letters, row }) => (
        <Box
          key={row.toString()}
          component={motion.div}
          {...letterAnimation}
          transition={{
            delay: row * staggerDelay,
            duration: stepDuration,
          }}
          sx={{
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateColumns: `repeat(${text.length}, 1fr)`,
            justifyContent: 'space-around',
          }}
        >
          {letters.map((letter, i) => (
            <Typography
              key={`${row.toString()} - ${i.toString()}`}
              color="text.secondary"
              textAlign={'center'}
              {...letterAnimation}
              sx={{ fontSize: { xs: '0.5rem', md: '0.7rem' } }}
            >
              {letter}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  )

  const progressBar = (
    <Box
      component={motion.div}
      {...fadeOutAnimation}
      sx={{
        position: 'absolute',
        height: '100%',
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: 'min-content min-content',
        alignItems: 'stretch',
        columnGap: 1,
      }}
    >
      <Box
        sx={(theme) => ({
          gridRow: 'span 2',
          width: '1px',
          height: '100%',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'flex-end',
          bgcolor: transparentize(theme.palette.text.primary, 0.9),
          borderRadius: 4,
        })}
      >
        <Box
          component={motion.div}
          bgcolor={(theme) => theme.palette.text.primary}
          sx={{ height: `${counter}%`, willChange: 'height' }}
        />
      </Box>
      <Typography
        component={'div'}
        color={'text.secondary'}
        variant="subtitle2"
        sx={{
          alignSelf: 'flex-start',
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
        }}
      >
        {counter}%
      </Typography>
      <Typography
        component={'div'}
        color={'text.secondary'}
        variant="subtitle2"
        sx={{
          alignSelf: 'flex-end',
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
        }}
      >
        Loading{animatedEllipses}
      </Typography>
    </Box>
  )

  const centerText = (
    <Box
      component={motion.div}
      {...fadeOutAnimation}
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        justifyItems: {
          xs: 'flex-end',
        },
      }}
    >
      <Typography
        component={'span'}
        variant="subtitle2"
        fontWeight={700}
        sx={{
          position: 'relative',
          right: { xs: 0, md: '20.5vw' },
          alignSelf: 'flex-start',
        }}
      >
        {animatedName}
      </Typography>
      <Typography
        component={'span'}
        color="text.secondary"
        variant="subtitle2"
        sx={{
          position: 'relative',
          right: { xs: 0, md: '20.5vw' },
          alignSelf: 'flex-end',
        }}
      >
        {animatedRole}
      </Typography>
    </Box>
  )

  return (
    <Box // container
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: theme.zIndex.appBar + 1,
      })}
    >
      {colorBg}
      {letterBg}
      <Box
        sx={{
          position: 'relative',
          height: 340,
          width: '60vw',
        }}
      >
        {progressBar}
        {centerText}
      </Box>
    </Box>
  )
}

export default function SplashScreen() {
  const [showSplash, setShowSplash] = React.useState(true)
  const { setSplashDuration, setSplashed } = useSplash()
  React.useEffect(() => {
    setSplashDuration(animationDuration + animationDuration + stepDuration)
    setTimeout(() => setShowSplash(false), animationDuration * 1000)
  }, [])

  return (
    <AnimatePresence onExitComplete={() => setSplashed(true)}>
      {showSplash && <SplashScreenModal />}
    </AnimatePresence>
  )
}
