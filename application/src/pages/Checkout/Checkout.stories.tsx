import { Meta } from '@storybook/react'
import { rest } from 'msw'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { Checkout } from '.'

export default {
  title: 'Pages/Checkout',
  component: Checkout,
} as Meta

export const PaymentError = () => (
  <MemoryRouter initialEntries={['/checkout']}>
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </MemoryRouter>
)

PaymentError.parameters = {
  msw: {
    handlers: [
      rest.post('/api/v1/payment', (_, res, ctx) => {
        return res(ctx.status(400))
      }),
    ],
  },
}
