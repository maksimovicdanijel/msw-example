import { Meta } from '@storybook/react'
import { http, HttpResponse } from 'msw'
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
      http.post('/api/v1/payment', () => {
        return HttpResponse.json(null, { status: 400 })
      }),
    ],
  },
}
