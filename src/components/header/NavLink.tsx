import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import { useRouter } from 'next/router'

export function NavLink(props: MuiLinkProps) {
  const { ...other } = props
  const router = useRouter()
  const pathname = props.href
  const routerPathname = router.pathname
  const shouldBeActive = pathname === routerPathname

  // const isExternal =
  //   typeof props.href === 'string' &&
  //   (props.href.indexOf('http') === 0 || props.href.indexOf('mailto:') === 0)

  const className = shouldBeActive
    ? `${props.className}`
    : `${props.className} 'active'`
  return (
    <MuiLink
      className={className}
      {...other}
      variant="subtitle2"
      color="text.primary"
      sx={(theme) => ({
        fontWeight: shouldBeActive ? 500 : 400,
        textDecoration: 'none',
        paddingX: 2,
        paddingY: 1,
        borderRadius: 100,
      })}
    />
  )
}
