import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-white p-6 shadow">
      <div className="container mx-auto">
        <Link to="/">
          <h1 className="inline-block font-heading text-3xl">MSW</h1>
        </Link>
      </div>
    </header>
  )
}
