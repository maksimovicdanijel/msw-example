// src/mocks/handlers.ts
import { rest } from 'msw'

export const handlers = [
  rest.post('/payment', (_, res, ctx) => {
    return res(ctx.status(200))
  }),
]
