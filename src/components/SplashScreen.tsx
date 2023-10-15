import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import useAnimatedCounter from '@/hooks/useAnimatedCounter'
import { transparentize } from 'color2k'

const totalAnimationDuration = 0.6
const letterDelay = 0.05
const letterRows = 6

function SplashScreenModal() {
  const counter = useAnimatedCounter(100, 0, totalAnimationDuration).toFixed(0)
  const ellipseCount = Math.floor(
    useAnimatedCounter(3, 0, totalAnimationDuration)
  )

  const text = 'VIETTRAN'
  const letterObjs = new Array(letterRows)
    .fill(text)
    .map((str, i) => (i % 2 ? str.split('').reverse() : str.split('')))
    .flat(1)
    .map((letter, i) => ({
      key: `${letter} - ${i}`,
      letter,
      row: Math.floor(i / text.length),
    }))

  const fadeOutProps = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: totalAnimationDuration },
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
    ...fadeOutProps,
    transition: {
      delay: totalAnimationDuration,
      duration: totalAnimationDuration,
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
        background: `linear-gradient(-35deg,${transparentize(
          theme.palette.background.default,
          theme.palette.mode === 'light' ? 0.2 : 0.1
        )}, ${transparentize(
          theme.palette.background.paper,
          theme.palette.mode === 'light' ? 0.2 : 0.1
        )})`,
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
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        rowGap: 4,
      }}
    >
      {letterObjs.map((letterObj) => (
        <Typography
          key={letterObj.key}
          component={motion.span}
          color="text.secondary"
          textAlign={'center'}
          {...letterAnimation}
          transition={{
            delay: letterObj.row * letterDelay,
            duration: totalAnimationDuration,
          }}
          sx={{ display: 'inline-block', fontSize: '0.7rem' }}
        >
          {letterObj.letter}
        </Typography>
      ))}
    </Box>
  )

  const progressBar = (
    <Box
      component={motion.div}
      {...fadeOutProps}
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
        Loading{'...'.substring(0, ellipseCount)}
      </Typography>
    </Box>
  )

  const centerText = (
    <Box
      component={motion.div}
      {...fadeOutProps}
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
        sx={{
          position: 'relative',
          right: { xs: 0, md: '20.5vw' },
          alignSelf: 'flex-start',
        }}
      >
        Viet Tran
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
        Creative Developer
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
  React.useEffect(() => {
    setTimeout(
      () => setShowSplash(false),
      (totalAnimationDuration + letterDelay * (letterRows - 1)) * 1000
    )
  }, [])

  return (
    <AnimatePresence>{showSplash && <SplashScreenModal />}</AnimatePresence>
  )
}
