import React from 'react'

export const SplashDispatchContext = React.createContext<{
  splashed: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  splashDuration: [number, React.Dispatch<React.SetStateAction<number>>]
}>({
  splashed: [
    false,
    () => {
      throw new Error('Forgot to wrap application in `SplashProvider`')
    },
  ],
  splashDuration: [
    999,
    () => {
      throw new Error('Forgot to wrap application in `SplashProvider`')
    },
  ],
})
