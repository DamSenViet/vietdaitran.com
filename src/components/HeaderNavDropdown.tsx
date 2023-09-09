import React from 'react'
import { IconButton, Box, Container, ClickAwayListener } from '@mui/material'
import { SvgHamburgerIcon } from '@/components/SvgHamburgerIcon'

export default function HeaderNavDropdown() {
  const [open, setOpen] = React.useState<boolean>(false)
  const hamburgerRef = React.useRef<HTMLButtonElement | null>(null)

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
        <Box
          component={'nav'}
          sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
            width: '100%',
            minHeight: 500,
            height: '100%',
            borderBottomLeftRadius: theme.shape.borderRadius * 5,
            borderBottomRightRadius: theme.shape.borderRadius * 5,
            backgroundColor: theme.palette.background.paper,
            transform: open ? 'translateY(0%)' : 'translateY(-101%)',
          })}
        >
          <Box className={'bg-grid'}>
            {/* expand when menu is open to compose the background */}
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
          <Container maxWidth={'xl'}></Container>
        </Box>
      </ClickAwayListener>
    </React.Fragment>
  )
}
