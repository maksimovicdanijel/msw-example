import { TrashIcon } from '@heroicons/react/24/outline'
import { Product } from '@app/types'
import { formatCurrency } from '@app/utils/currency'
import visaImg from './assets/visa-logo.png'

const cartContent: Product[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Nike Sportswear Tech Fleece',
    price: 30,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Nike Solo Swoosh',
    price: 60.35,
  },
]

export function Checkout() {
  return (
    <div className="flex h-[100vh] flex-col md:flex-row md:justify-between">
      <div className="bg-slate-50 p-8 md:h-full  md:flex-1 md:p-16">
        <div className="md:mx-auto md:w-[300px] lg:w-[550px]">
          <h1 className="mb-12 font-heading text-xl text-zinc-800">
            Your order
          </h1>

          <ul>
            {cartContent.map(product => (
              <li key={product.id} className="mb-8 flex last:mb-0">
                <div className="mr-6">
                  <div
                    style={{ backgroundImage: `url(${product.src})` }}
                    className="h-[100px] w-[100px] bg-cover shadow"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 font-heading text-zinc-800">
                    {product.name}
                  </h4>
                  <h4>1 x {formatCurrency(product.price)}</h4>
                </div>
                <TrashIcon className="h-5 w-5 text-zinc-500" />
              </li>
            ))}
          </ul>
          <div className="mt-10 h-[4px] w-full bg-zinc-200" />
          <div className="pt-4 text-right">
            <p>
              You owe us{' '}
              <span className="font-heading text-lg">
                {formatCurrency(90.35)}
              </span>{' '}
              for these goodies
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 md:h-full md:flex-1 md:p-16 md:pl-24 md:shadow">
        <form className="w-[400px]">
          <fieldset className="mb-10">
            <label htmlFor="email" className="mb-2 inline-block font-heading">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded border-2 border-zinc-200 p-3 outline-none focus:border-cyan-600"
              autoComplete="off"
            />
          </fieldset>
          <fieldset className="mb-10">
            <label htmlFor="phone" className="mb-2 inline-block font-heading">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              className="w-full rounded border-2 border-zinc-200 p-3 outline-none focus:border-cyan-600"
              autoComplete="off"
            />
          </fieldset>
          <fieldset className="mb-10">
            <label
              htmlFor="payment-method"
              className="mb-2 inline-block font-heading"
            >
              Payment method
            </label>
            <div className="flex justify-between rounded border-2 border-cyan-600 p-4 py-6 shadow">
              <div>
                <input
                  type="radio"
                  id="payment-method"
                  checked={true}
                  className="h-4 w-4 "
                />
                <label
                  htmlFor="payment-method"
                  className="ml-4 font-heading text-zinc-700"
                >
                  **** 4563
                </label>
              </div>

              <img src={visaImg} width="80" />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
