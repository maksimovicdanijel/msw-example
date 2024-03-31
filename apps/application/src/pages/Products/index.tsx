import { Button } from '@app/components/Button'
import { PageTitle } from '@app/components/PageTitle'
import { Container } from '../../components/Container'
import { ProductListItem } from './components/ProductListItem'
import { useEffect, useState } from 'react'
import { Product } from '@app/types'

export function Products() {
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('/api/v1/products')

      if (!response.ok) {
        throw new Error('error while fetching products')
      }

      const result = await response.json()

      setProducts(result)
    }

    getProducts()
  }, [])

  return (
    <Container className="pt-8">
      <PageTitle className="mb-4">Featured products</PageTitle>

      {products && products.length ? (
        <ul className="grid grid-rows-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(product => (
            <li key={product.id}>
              <ProductListItem product={product}>
                <Button>Add to cart</Button>
              </ProductListItem>
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  )
}
