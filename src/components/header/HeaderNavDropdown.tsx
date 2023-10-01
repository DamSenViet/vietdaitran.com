import React from 'react'
import {
  useTheme,
  useMediaQuery,
  IconButton,
  ClickAwayListener,
} from '@mui/material'
import { SvgHamburgerIcon } from '@/components/header/SvgHamburgerIcon'
import HeaderNavModal from './HeaderNavModal'

export default function HeaderNavDropdown() {
  const [open, setOpen] = React.useState<boolean>(false)
  const hamburgerRef = React.useRef<HTMLButtonElement | null>(null)
  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.up('md'))

  // reset dropdown state when dropdown is wapped with bar
  React.useEffect(() => {
    if (isMedium) setOpen(false)
  }, [isMedium])

  return (
    <React.Fragment>
      <IconButton
        aria-label="Menu"
        ref={hamburgerRef}
        disableRipple
        onClick={() => setOpen((value) => !value)}
        sx={{
          borderRadius: 3,
          padding: 2,
        }}
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
        <HeaderNavModal open={open} />
      </ClickAwayListener>
    </React.Fragment>
  )
}
