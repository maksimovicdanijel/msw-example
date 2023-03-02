import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

const Error = () => <p>Error page</p>

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={browserRouter} />
}

export default App
