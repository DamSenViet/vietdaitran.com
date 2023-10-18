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
  initialRootThemeState,
  rootThemeReducer,
  RootThemeDispatchContext,
  RootThemeActionType,
} from '@/context/rootTheme'

interface RootThemeContextProps {
  children: React.ReactNode
}

export default function ThemeContext(props: RootThemeContextProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  })

  // os controlled theme preference
  const preferredMode: PaletteMode = prefersDarkMode ? 'dark' : 'light'

  const [rootThemeState, dispatch] = React.useReducer(
    rootThemeReducer,
    initialRootThemeState
  )

  // effect to check if user is utilizing theme override
  React.useEffect(() => {
    const nextPaletteMode: PaletteMode =
      (localStorage.getItem('mui-mode') as PaletteMode) ?? preferredMode

    dispatch({
      type: RootThemeActionType.UPDATE,
      payload: { mode: nextPaletteMode },
    })
  }, [preferredMode])

  const rootTheme = React.useMemo(
    () => (rootThemeState.mode === 'dark' ? dark : light),
    [rootThemeState.mode]
  )

  return (
    <ThemeProvider theme={rootTheme}>
      <CssBaseline />
      <RootThemeDispatchContext.Provider value={[rootThemeState, dispatch]}>
        {props.children}
      </RootThemeDispatchContext.Provider>
    </ThemeProvider>
  )
}
