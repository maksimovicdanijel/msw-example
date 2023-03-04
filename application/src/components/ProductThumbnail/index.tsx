import { ImgHTMLAttributes } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
} & ImgHTMLAttributes<HTMLImageElement>

export function ProductThumbnail({ src, alt, className, ...rest }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      className={`${className} inline-block drop-shadow-sm`}
    />
  )
}
