import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'
import { action as paymentAction, Checkout } from './pages/Checkout'
import { NotFound } from './pages/NotFound'
import { Products } from './pages/Products'
import { ThankYou } from './pages/ThankYou'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        action: paymentAction,
      },
      {
        path: 'thank-you',
        element: <ThankYou />,
      },
    ],
  },
])

export default browserRouter
