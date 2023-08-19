import React from 'react'
import { PaletteMode } from '@mui/material'
import { ThemeActionType, ThemeDispatchContext } from '@/context/theme'

/**
 * Modifies the theme in the top level theme provider.
 * @returns Actions to get / set the top level theme.
 */
export default function useRootTheme() {
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
