import React from 'react'
import { PaletteMode } from '@mui/material'

export const enum RootThemeActionType {
  UPDATE = 'UPDATE',
  RESET = 'RESET',
}

export interface RootThemeAction {
  type: RootThemeActionType
  payload: Partial<RootThemeState>
}

export interface RootThemeState {
  mode: PaletteMode
}

export const initialRootThemeState: RootThemeState = {
  mode: 'light',
}

export const rootThemeReducer = (
  state: RootThemeState,
  action: RootThemeAction
): RootThemeState => {
  const { type, payload } = action
  switch (type) {
    case RootThemeActionType.UPDATE:
      return {
        ...state,
        ...payload,
      }
    case RootThemeActionType.RESET:
      return initialRootThemeState
    default:
      return state
  }
}

// context carries the dispatch that controls the outer theme context
export const RootThemeDispatchContext = React.createContext<
  [RootThemeState, React.Dispatch<RootThemeAction>]
>([
  initialRootThemeState,
  () => {
    throw new Error('Forgot to wrap application in `ThemeProvider`')
  },
])
