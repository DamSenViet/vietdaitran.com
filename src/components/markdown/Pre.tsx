import React, { ComponentProps } from 'react'
import { useTheme, useMediaQuery, Box, IconButton } from '@mui/material'
import { useClipboard } from '@mantine/hooks'
import { MdContentCopy } from 'react-icons/md'
import { useSnackbar, SnackbarKey } from 'notistack'

export interface PreProps extends ComponentProps<'pre'> {}

export default function Pre({ children }: PreProps) {
  const ref = React.useRef<HTMLPreElement>()
  const theme = useTheme()
  const { copy, copied, reset, error } = useClipboard()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [lastSnackBarId, setLastSnackbarId] =
    React.useState<SnackbarKey | null>(null)
  const copyCode = () => {
    if (lastSnackBarId) closeSnackbar(lastSnackBarId)
    copy(ref!.current!.textContent || '')
  }

  React.useEffect(() => {
    if (copied)
      setLastSnackbarId(
        enqueueSnackbar('Copied code!', {
          autoHideDuration: 1000,
          variant: 'success',
          preventDuplicate: false,
        })
      )
    if (error)
      enqueueSnackbar(error?.message, {
        autoHideDuration: 1000,
        variant: 'error',
        preventDuplicate: true,
      })
    reset()
  }, [copied, error])

  const copyButton = (
    <IconButton size="medium" onClick={copyCode}>
      <MdContentCopy size={16} />
    </IconButton>
  )

  const floatingCopy = (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 1,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        borderBottomLeftRadius: theme.spacing(1),
      }}
    >
      {copyButton}
    </Box>
  )

  const codeHeader = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 1,
        borderTop: `1px solid ${theme.palette.text.disabled}`,
        borderLeft: `1px solid ${theme.palette.text.disabled}`,
        borderRight: `1px solid ${theme.palette.text.disabled}`,
        borderTopLeftRadius: theme.spacing(1),
        borderTopRightRadius: theme.spacing(1),
        background: theme.palette.background.paper,
      }}
    >
      {copyButton}
    </Box>
  )

  return (
    <Box // code wrapper
      className={`${
        theme.palette.mode === 'light' ? 'light-code-block' : 'dark-code-block'
      }`}
      sx={{
        position: 'relative',
        marginBottom: 2,
      }}
    >
      {isSm ? codeHeader : floatingCopy}
      <Box
        ref={ref}
        component={'pre'}
        sx={{
          fontSize: theme.typography.subtitle2.fontSize,
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.text.disabled}`,
          borderTopLeftRadius: isSm ? 0 : theme.spacing(1),
          borderTopRightRadius: isSm ? 0 : theme.spacing(1),
          borderBottomLeftRadius: theme.spacing(1),
          borderBottomRightRadius: theme.spacing(1),
          marginY: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
