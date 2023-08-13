import React from 'react'
import {
  IconButton,
  Box,
  Container,
  ThemeProvider,
  ClickAwayListener,
  useTheme,
} from '@mui/material'
import { SvgHamburgerIcon } from './SvgHamburgerIcon'
import { byMode } from '@/theme/utils'
import light from '@/theme/light'
import dark from '@/theme/dark'

export default function HeaderNavDropdown() {
  const [open, setOpen] = React.useState<boolean>(false)
  const hamburgerRef = React.useRef<HTMLButtonElement | null>(null)
  const theme = useTheme()

  return (
    <React.Fragment>
      <ThemeProvider theme={byMode(theme, dark, light)}>
        <IconButton
          aria-label="Menu"
          ref={hamburgerRef}
          disableRipple
          onClick={() => setOpen((value) => !value)}
          sx={(theme) => ({
            borderRadius: 3,
            padding: 2,
            backgroundColor: theme.palette.background.paper,
          })}
        >
          {<SvgHamburgerIcon open={open} />}
        </IconButton>
        <ClickAwayListener
          onClickAway={(event) => {
            if (
              // note that hamburger icon cannot switch when the click away triggers
              hamburgerRef.current &&
              !hamburgerRef.current.contains(event.target as Node)
            )
              setOpen(false)
          }}
        >
          <Box
            component={'nav'}
            sx={(theme) => ({
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: -1,
              width: '100%',
              minHeight: 500,
              borderBottomLeftRadius: theme.shape.borderRadius * 5,
              borderBottomRightRadius: theme.shape.borderRadius * 5,
              backgroundColor: theme.palette.background.default,
              transform: open ? 'translateY(0%)' : 'translateY(-101%)',
            })}
          >
            <Container maxWidth={'xl'} sx={(theme) => ({})}></Container>
          </Box>
        </ClickAwayListener>
      </ThemeProvider>
    </React.Fragment>
  )
}
