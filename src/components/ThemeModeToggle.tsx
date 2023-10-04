import React from 'react'
import useRootTheme from '@/hooks/useRootTheme'
import { IconButton } from '@mui/material'
import { NightlightOutlined, LightModeOutlined } from '@mui/icons-material'

export default function ThemeModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, toggleTheme } = useRootTheme()

  const themeToSwitchTo = React.useMemo(
    () => (theme === 'light' ? 'dark' : 'light'),
    [theme]
  )

  const Icon = !mounted
    ? null
    : {
        light: <LightModeOutlined fontSize="small" />,
        dark: <NightlightOutlined fontSize="small" />,
      }[themeToSwitchTo as string]

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <IconButton
      aria-label={`Switch to ${themeToSwitchTo} theme`}
      sx={(theme) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
      })}
      onClick={toggleTheme}
    >
      {Icon}
    </IconButton>
  )
}
