import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Restore, Favorite, LocationOn } from '@mui/icons-material'

export default function FooterNav() {
  const [value, setValue] = React.useState('recents')
  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{
        marginTop: 30,
        display: {
          md: 'none',
        },
      }}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction
        value={'recents'}
        label="Recents"
        icon={<Restore />}
        sx={(theme) => ({ color: theme.palette.secondary.main })}
      />
      <BottomNavigationAction
        value="favorites"
        label="Favorites"
        icon={<Favorite />}
        sx={(theme) => ({ color: theme.palette.secondary.main })}
      />
      <BottomNavigationAction
        value="nearby"
        label="Nearby"
        icon={<LocationOn />}
        sx={(theme) => ({ color: theme.palette.secondary.main })}
      />
    </BottomNavigation>
  )
}
