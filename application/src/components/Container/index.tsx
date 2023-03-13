import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function Container({ children, className }: Props) {
  return <div className={`mx-auto ${className} container`}>{children}</div>
}
