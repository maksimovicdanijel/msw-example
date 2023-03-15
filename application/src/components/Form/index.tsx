import {
  FieldsetHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
} from 'react'

export function Label({
  children,
  className,
  ...rest
}: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label
      {...rest}
      className={`mb-2 inline-block font-heading text-zinc-700 ${className}`}
    >
      {children}
    </label>
  )
}

export function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={`w-full rounded border-2 border-zinc-200 p-3 outline-none focus:border-cyan-600 ${className}`}
    />
  )
}

export function Radio({
  className,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return <input type="radio" {...rest} className={`h-4 w-4 ${className}`} />
}

export function Fieldset({
  children,
  className,
  ...rest
}: PropsWithChildren<FieldsetHTMLAttributes<HTMLFieldSetElement>>) {
  return <fieldset className={`mb-8 ${className}`}>{children}</fieldset>
}
