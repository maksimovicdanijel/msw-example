// src/mocks/handlers.ts
import { rest } from 'msw'

export const handlers = [
  rest.post('/api/v1/payment', async (req, res, ctx) => {
    const payload = await req.json()

    console.log(payload)

    return res(ctx.delay(2000), ctx.status(200))
  }),
]
