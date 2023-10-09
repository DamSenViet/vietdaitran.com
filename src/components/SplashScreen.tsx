import React from 'react'
import { Box, Typography } from '@mui/material'
import { transparentize } from 'color2k'
import { useRouter } from 'next/router'
import { useLockBodyScroll, useToggle } from 'react-use'

// goes inside the layout or is a layout itself

export default function SplashScreen() {
  // const [locked, toggleLocked] = useToggle(false)
  // useLockBodyScroll(locked)

  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setShow(false), 1000)
  }, [])

  const letters = new Array(6)
    .fill('VIETTRAN')
    .map((str, i) => (i % 2 ? str.split('').reverse() : str.split('')))
    .flat(1)

  return (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        display: show ? 'grid' : 'none',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        zIndex: theme.zIndex.appBar + 1,
        // background: 'linear-gradient(-35deg,#121212,#232323)',
        backgroundColor: transparentize(theme.palette.background.default, 0.1),
        backdropFilter: 'blur(10px)',
      })}
    >
      {/* Background */}
      <Box></Box>
      {/* Letters */}
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
        {letters.map((letter, i) => (
          <Typography
            // fontWeight={700}
            key={i.toString()}
            component={'span'}
            color="text.secondary"
            textAlign={'center'}
            sx={{
              fontSize: '0.7rem',
            }}
          >
            {letter}
          </Typography>
        ))}
      </Box>
      {/* Central Text */}
      <Box
        sx={{
          position: 'relative',
          height: 340,
          width: '60vw',
        }}
      >
        {/* Progress Bar */}
        <Box>
          <Typography
            component={'div'}
            color={'text.secondary'}
            variant="subtitle2"
            sx={{
              position: 'absolute',
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)',
              top: 0,
            }}
          >
            0%
          </Typography>
          <Typography
            component={'div'}
            color={'text.secondary'}
            variant="subtitle2"
            sx={{
              position: 'absolute',
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)',
              bottom: 0,
            }}
          >
            Loading
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '20.5vw',
            top: 0,
          }}
        >
          <Typography component={'span'} fontWeight={700} variant="subtitle2">
            Viet Tran
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '20.5vw',
            bottom: 0,
          }}
        >
          <Typography
            component={'span'}
            color="text.secondary"
            variant="subtitle2"
          >
            Creative Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
