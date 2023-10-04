import React, { FunctionComponent } from 'react'

export default function withDefaultProps<Props extends object>(
  BaseComponent: FunctionComponent<Props>,
  defaultProps: Partial<Props>
): FunctionComponent<Props> {
  // what do we want to do here???
  return (props: Props) => <BaseComponent {...defaultProps} {...props} />
}
