import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { Checkout } from '.'

const DummyThankYou = () => <p>Thank you</p>

const user = userEvent.setup()

describe('page: Checkout', () => {
  const server = setupServer()

  beforeAll(() => {
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('redirects to the thank you page when the payment is sucessfull', async () => {
    server.use(
      rest.post('/api/v1/payment', async (_, res, ctx) => {
        return res(ctx.status(200))
      })
    )

    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<DummyThankYou />} />
        </Routes>
      </MemoryRouter>
    )

    await fillForm()

    await user.click(screen.getByText(/pay now/i))

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
  })

  it('shows an alert if there is an error when making payment', async () => {
    server.use(
      rest.post('/api/v1/payment', async (_, res, ctx) => {
        return res(ctx.status(400))
      })
    )

    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<DummyThankYou />} />
        </Routes>
      </MemoryRouter>
    )

    await fillForm()

    await user.click(screen.getByText(/pay now/i))

    await waitFor(() => {
      const alert = screen.getByRole('alert')

      expect(alert).toHaveTextContent(/there was an issue/i)
    })
  })
})

async function fillForm() {
  await user.type(screen.getByLabelText(/email/i), 'john.doe@example.com')
  await user.type(screen.getByLabelText(/phone/i), '+39 20 1111 1111')
  await user.type(screen.getByLabelText(/card holder/i), 'John Doe')
}
