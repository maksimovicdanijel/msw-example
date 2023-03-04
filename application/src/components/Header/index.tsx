import { Link } from 'react-router-dom'
import CartIcon from '../CartIcon'

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <Link to="/">
            <h1 className="inline-block font-heading text-3xl">MSW</h1>
          </Link>

          <CartIcon />
        </div>
      </div>
    </header>
  )
}
