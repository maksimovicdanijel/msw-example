import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { Checkout } from './pages/Checkout'
import { Products, loader as productsLoader } from './pages/Products'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        // loader: async () => {
        //   const products = await productsLoader()

        //   return { products }
        // },
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
])

export default browserRouter
