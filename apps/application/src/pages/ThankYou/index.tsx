import { Button } from '@app/components/Button'
import { Container } from '@app/components/Container'
import { PageTitle } from '@app/components/PageTitle'
import { Link } from 'react-router-dom'

export function ThankYou() {
  return (
    <Container className="mt-12">
      <PageTitle className="mb-2">Thank you for your purchase!</PageTitle>
      <p className="mb-6">We have sent the confirmation email.</p>
      <Link to="/">
        <Button>Continue shopping</Button>
      </Link>
    </Container>
  )
}
