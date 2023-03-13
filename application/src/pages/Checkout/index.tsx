import { Container } from '@app/components/Container'
import { PageTitle } from '@app/components/PageTitle'
import { ProductThumbnail } from '@app/components/ProductThumbnail'
import { Product } from '@app/types'
import { formatCurrency } from '@app/utils/currency'

const cartContent: Product[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Hoodie 1',
    price: 30,
  },
]

export function Checkout() {
  return (
    <Container className="w-[600px]">
      <PageTitle>Checkout</PageTitle>
      <p className="text-gray-400">
        Take another look at the products you've chosen.
      </p>

      <table className="w-full table-fixed border-collapse border border-slate-400  text-left">
        <thead className="">
          <tr className="border-1 font-heading">
            <th className="font-medium">Image</th>
            <th className="font-medium">Product</th>
            <th className="font-medium">Price</th>
            <th className="font-medium">Quantity</th>
            <th className="font-medium">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartContent.map(product => (
            <tr key={product.id}>
              <td>
                <ProductThumbnail src={product.src} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{formatCurrency(product.price)}</td>
              <td>1</td>
              <td>{formatCurrency(product.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
