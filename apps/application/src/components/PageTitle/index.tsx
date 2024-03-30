import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export function PageTitle({ children, className }: Props) {
  return (
    <h1 className={`font-heading text-xl font-medium ${className}`}>
      {children}
    </h1>
  )
}
