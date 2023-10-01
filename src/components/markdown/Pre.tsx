import React, { ComponentProps } from 'react'
import { useTheme, Box, IconButton } from '@mui/material'
import { useClipboard } from '@mantine/hooks'
import { MdContentCopy } from 'react-icons/md'
import { useSnackbar } from 'notistack'

export interface PreProps extends ComponentProps<'pre'> {
  header?: boolean
}

export default function Pre({ children, header = false }: PreProps) {
  const ref = React.useRef<HTMLPreElement>()
  const theme = useTheme()
  const { copy, copied, reset, error } = useClipboard()
  const { enqueueSnackbar } = useSnackbar()
  const copyCode = () => copy(ref!.current!.textContent || '')

  React.useEffect(() => {
    if (copied)
      enqueueSnackbar('Copied code!', {
        autoHideDuration: 1000,
        variant: 'success',
        preventDuplicate: false,
      })
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
        right: theme.spacing(1),
        top: theme.spacing(1),
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
      }}
    >
      {header ? codeHeader : floatingCopy}
      <Box
        ref={ref}
        component={'pre'}
        sx={{
          fontSize: theme.typography.subtitle2.fontSize,
          border: `1px solid ${theme.palette.text.disabled}`,
          borderTopLeftRadius: header ? 0 : theme.spacing(1),
          borderTopRightRadius: header ? 0 : theme.spacing(1),
          borderBottomLeftRadius: theme.spacing(1),
          borderBottomRightRadius: theme.spacing(1),
          marginTop: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}