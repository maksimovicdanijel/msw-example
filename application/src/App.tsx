import { RouterProvider } from 'react-router-dom'

import browserRouter from './routes'

function App() {
  return <RouterProvider router={browserRouter} />
}

export default App
