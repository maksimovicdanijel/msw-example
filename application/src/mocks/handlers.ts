// src/mocks/handlers.ts
import { http, delay, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/v1/payment', async ({ request }) => {
    const payload = await request.json()

    console.log(payload)
    await delay(2000)

    return HttpResponse.json(null, { status: 200 })
  }),
]
