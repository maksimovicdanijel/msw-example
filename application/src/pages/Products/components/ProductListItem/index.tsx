import { Button } from '@app/components/Button'
import { ProductThumbnail } from '@app/components/ProductThumbnail'
import Spacer from '@app/components/Spacer'
import { Product } from '@app/types'
import { formatCurrency } from '@app/utils/currency'
import { PropsWithChildren, useState } from 'react'

type Props = {
  product: Product
}

export function ProductListItem({
  product,
  children,
}: PropsWithChildren<Props>) {
  const [hovered, setHovered] = useState(false)

  return (
    <div>
      <div
        className="relative"
        {...(children
          ? {
              onMouseEnter: () => setHovered(true),
              onMouseLeave: () => setHovered(false),
            }
          : null)}
      >
        <ProductThumbnail src={product.src} alt={product.name} />
        {children ? (
          <div
            className={`absolute top-0 left-0 opacity-${
              hovered ? 1 : 0
            } flex h-full w-full items-center justify-center bg-white/80 transition-opacity`}
          >
            {children}
          </div>
        ) : null}
      </div>

      <Spacer space={4} />
      <h3 className="flex h-3 justify-between font-heading text-lg">
        <span>{product.name}</span>
        <span>{formatCurrency(product.price)}</span>
      </h3>
    </div>
  )
}
