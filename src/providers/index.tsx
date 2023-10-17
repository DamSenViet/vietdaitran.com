import React from 'react'
import SplashProvider from './SplashProvider'
import ThemeContext from './ThemeContext'
import { SnackbarProvider } from 'notistack'

class ConfiguredSnackbarProvider extends SnackbarProvider {
  static defaultProps = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    maxSnack: 5,
  }
}

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return [ConfiguredSnackbarProvider, SplashProvider, ThemeContext].reduce(
    (acc, Curr) => {
      return <Curr>{acc}</Curr>
    },
    children
  )
}
