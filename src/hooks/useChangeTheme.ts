import React from 'react'
import { PaletteMode } from '@mui/material'
import { ThemeActionType, ThemeDispatchContext } from '@/context/theme'

export default function useChangeTheme() {
  const [themeState, dispatch] = React.useContext(ThemeDispatchContext)

  const setThemeMode = (mode: PaletteMode) => {
    localStorage.setItem('mui-mode', mode)
    dispatch({
      type: ThemeActionType.UPDATE,
      payload: { mode },
    })
  }

  return {
    theme: themeState.mode,
    setLightTheme: () => setThemeMode('light'),
    setDarkTheme: () => setThemeMode('dark'),
    toggleTheme: () =>
      setThemeMode(themeState.mode === 'dark' ? 'light' : 'dark'),
  }
}
