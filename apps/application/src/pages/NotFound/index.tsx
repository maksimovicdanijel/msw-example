import { Button } from '@app/components/Button'
import { Container } from '@app/components/Container'
import Spacer from '@app/components/Spacer'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <Container className="flex h-[100vh] w-[700px] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 font-heading text-5xl">404</h1>
        <p>The page you are looking for does not exist.</p>
        <Spacer space={7} />
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </Container>
  )
}
