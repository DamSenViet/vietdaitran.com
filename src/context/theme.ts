import React from 'react'
import { PaletteMode } from '@mui/material'

export const enum ThemeActionType {
  UPDATE = 'UPDATE',
  RESET = 'RESET',
}

export interface ThemeAction {
  type: ThemeActionType
  payload: Partial<ThemeState>
}

export interface ThemeState {
  mode: PaletteMode
}

export const initialThemeState: ThemeState = {
  mode: 'light',
}

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  const { type, payload } = action
  switch (type) {
    case ThemeActionType.UPDATE:
      return {
        ...state,
        ...payload,
      }
    case ThemeActionType.RESET:
      return initialThemeState
    default:
      return state
  }
}

// context carries the dispatch that controls the outer theme context
export const ThemeDispatchContext = React.createContext<
  [ThemeState, React.Dispatch<ThemeAction>]
>([
  initialThemeState,
  () => {
    throw new Error('Forgot to wrap application in `ThemeProvider`')
  },
])
