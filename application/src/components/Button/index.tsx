import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export function Button({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <button
      className="bg-black py-2 px-4 text-white hover:underline disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:no-underline"
      {...rest}
    >
      {children}
    </button>
  )
}
