export default async function getProducts() {
  const response = await fetch('http://localhost:5000/products')

  const { products } = await response.json()

  return products
}
