import React from 'react'
import light from '@/theme/light'
import dark from '@/theme/dark'
import {
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  PaletteMode,
} from '@mui/material'
import {
  initialThemeState,
  themeReducer,
  ThemeDispatchContext,
  ThemeActionType,
} from '@/context/theme'

interface ThemeContextProps {
  children: React.ReactNode
}

export default function ThemeContext(props: ThemeContextProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  })

  // os controlled theme preference
  const preferredMode: PaletteMode = prefersDarkMode ? 'dark' : 'light'

  const [themeState, dispatch] = React.useReducer(
    themeReducer,
    initialThemeState
  )

  // effect to check if user is utilizing theme override
  React.useEffect(() => {
    const nextPaletteMode: PaletteMode =
      (localStorage.getItem('mui-mode') as PaletteMode) ?? preferredMode

    dispatch({
      type: ThemeActionType.UPDATE,
      payload: { mode: nextPaletteMode },
    })
  }, [preferredMode])

  const theme = React.useMemo(
    () => (themeState.mode === 'dark' ? dark : light),
    [themeState.mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeDispatchContext.Provider value={[themeState, dispatch]}>
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeProvider>
  )
}
