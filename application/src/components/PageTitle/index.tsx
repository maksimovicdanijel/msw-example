import { PropsWithChildren } from 'react'

export function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="relative pb-5 font-heading text-xl font-medium">
      {children}
    </h1>
  )
}
