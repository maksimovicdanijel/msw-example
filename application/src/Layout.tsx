import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import Spacer from './components/Spacer'

export function Layout() {
  return (
    <div>
      <Header />
      <Spacer space={10} />
      <Outlet />
    </div>
  )
}
