import { isFunction } from 'lodash'
import React, { FunctionComponent } from 'react'

// allow passing not just prop value, but performing computation off passed props
export default function withDefaultProps<Props extends object>(
  BaseComponent: FunctionComponent<Props>,
  defaultProps: Partial<Props> | ((props: Props) => Partial<Props>)
): FunctionComponent<Props> {
  // maybe do a computation
  // default props also be an array off the regular props passed to it
  return (props: Props) => {
    const computedDefaultProps = React.useMemo(
      () => (isFunction(defaultProps) ? defaultProps(props) : defaultProps),
      [props]
    )
    return <BaseComponent {...props} {...computedDefaultProps} />
  }
}
