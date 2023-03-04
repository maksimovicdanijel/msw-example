import { Button } from '@app/components/Button'
import Spacer from '@app/components/Spacer'
import { useLoaderData } from 'react-router-dom'
import getProducts from '../../api/getProducts'
import { Container } from '../../components/Container'
import { ProductThumbnail } from '../../components/ProductThumbnail'
import { ProductListItem } from './components/ProductListItem'

const products = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Hoodie 1',
    price: 30,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'T-Shirt',
    price: 40,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'T-Shirt 2',
    price: 60.35,
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'T-Shirt 3',
    price: 55.35,
  },
]

export function Products() {
  return (
    <Container>
      <h1 className="relative pb-5 font-heading text-xl font-medium">
        Featured products
      </h1>

      <ul className="grid grid-cols-4 grid-rows-1 gap-10">
        {products.map(product => (
          <li key={product.id}>
            <ProductListItem product={product}>
              <Button>Add to cart</Button>
            </ProductListItem>
          </li>
        ))}
      </ul>
    </Container>
  )
}
