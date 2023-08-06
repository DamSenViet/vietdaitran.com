import React from 'react'
import { PaletteMode } from '@mui/material'
import { ThemeActionType, ThemeDispatchContext } from '@/context/theme'

export default function useChangeTheme() {
  const [themeState, dispatch] = React.useContext(ThemeDispatchContext)

  const setThemeMode = (mode: PaletteMode) => {
    localStorage.setItem('themeMode', mode)
    dispatch({
      type: ThemeActionType.UPDATE,
      payload: { mode },
    })
  }

  return {
    setLightTheme: () => setThemeMode('light'),
    setDarkTheme: () => setThemeMode('dark'),
    toggleTheme: () =>
      setThemeMode(themeState.mode === 'dark' ? 'dark' : 'light'),
  }
}
