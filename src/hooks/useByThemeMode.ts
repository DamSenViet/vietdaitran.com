import { useTheme, Theme } from '@mui/material'

const useByThemeMode = <T>(darkValue: T, lightValue: T, theme?: Theme): T =>
  (theme || useTheme()!).palette.mode === 'dark' ? darkValue : lightValue

export default useByThemeMode
