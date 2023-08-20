import React from 'react'
import useRootTheme from '@/hooks/useRootTheme'
import { IconButton } from '@mui/material'
import { NightlightOutlined, LightModeOutlined } from '@mui/icons-material'

export default function ThemeModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, toggleTheme } = useRootTheme()

  const Icon = !mounted
    ? null
    : {
        light: <NightlightOutlined />,
        dark: <LightModeOutlined />,
      }[theme as string]

  React.useEffect(() => {
    setMounted(true)
    console.log('ready')
  }, [])

  if (!mounted) return null

  return (
    <IconButton
      sx={(theme) => ({ color: theme.palette.text.primary })}
      onClick={toggleTheme}
    >
      {Icon}
    </IconButton>
  )
}
