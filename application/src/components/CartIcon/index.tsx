import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Product } from '@app/types'
import { ProductThumbnail } from '../ProductThumbnail'
import { formatCurrency } from '@app/utils/currency'
import Spacer from '../Spacer'
import * as Separator from '@radix-ui/react-separator'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

const cartContent: Product[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Hoodie 1',
    price: 30,
  },
]

export default function CartIcon() {
  const [isCartVisible, setIsCartVisible] = useState(false)

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setIsCartVisible(true)}
      onMouseLeave={() => setIsCartVisible(false)}
    >
      <div className="relative">
        <FontAwesomeIcon
          className="text-2xl"
          icon={faCartShopping}
          fontVariant="regular"
        />

        <span className="align-center absolute -top-2 -right-2 inline-block h-5 w-5 rounded-full bg-sky-700 text-center text-sm text-white">
          1
        </span>
      </div>
      <div
        className={`cursor-inherit absolute top-full right-0 z-10 w-80 bg-white  p-4 drop-shadow ${
          isCartVisible ? 'visible' : 'hidden'
        }`}
      >
        <h4 className="font-heading text-lg">Your cart</h4>
        <Spacer space={5} />

        <ul>
          {cartContent.map(product => (
            <div className="flex" key={product.id}>
              <ProductThumbnail
                src={product.src}
                alt={product.name}
                className="w-20 pr-4"
              />
              <div>
                <h6 className="font-heading">{product.name}</h6>
                <p>1 x {formatCurrency(product.price)}</p>
              </div>
            </div>
          ))}
        </ul>

        <Separator.Root className="my-[15px] bg-gray-300 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />

        <div className="flex items-center justify-between">
          <Link to="/checkout">
            <Button onClick={() => setIsCartVisible(false)}>Checkout</Button>
          </Link>

          <h4 className="text font-heading">Total: {formatCurrency(30)}</h4>
        </div>
      </div>
    </div>
  )
}
