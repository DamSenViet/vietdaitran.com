import { Box } from '@mui/material'
import { permanent_marker } from '@/theme/fonts'

export default function Logo() {
  return (
    <Box
      component={'span'}
      sx={(theme) => ({
        height: 56,
        width: 56,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: theme.palette.text.primary,
        fontFamily: permanent_marker.style.fontFamily,
        fontSize: '1.3rem',
        color: theme.palette.background.default,
      })}
    >
      VT
    </Box>
  )
}
