import React from 'react'
import useChangeTheme from '@/hooks/useChangeTheme'
import { IconButton } from '@mui/material'
import { Nightlight, Brightness5 } from '@mui/icons-material'

export default function ThemeModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, toggleTheme } = useChangeTheme()

  const Icon = !mounted
    ? null
    : {
        light: <Nightlight />,
        dark: <Brightness5 />,
      }[theme as string]

  React.useEffect(() => {
    setMounted(true)
    console.log('ready')
  }, [])

  if (!mounted) return null

  return (
    <IconButton color="primary" onClick={toggleTheme}>
      {Icon}
    </IconButton>
  )
}
