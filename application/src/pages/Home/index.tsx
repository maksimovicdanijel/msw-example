import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold">Hello world!</h1>

      <Link to="/checkout">Checkout</Link>
      <Link to="/doesnexist">Not found</Link>

      <button>Button text</button>
    </div>
  )
}
