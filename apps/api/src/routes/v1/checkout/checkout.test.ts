import fastify from 'fastify'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import Chance from 'chance'
import checkoutRoutes from '.'
import { PluginOptions } from '@src/types'

const server = setupServer()

const PAYMENT_API_URI = 'http://payment-mock.example/api/v1'

const chance = new Chance()

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('returns success if payment is successfull', async () => {
  server.use(
    http.post(`${PAYMENT_API_URI}/payment`, async () => {
      return HttpResponse.json(null, { status: 200 })
    })
  )

  const app = fastify()

  app.register(checkoutRoutes, {
    env: {
      PAYMENT_API: PAYMENT_API_URI,
    },
  } as PluginOptions)

  const response = await app.inject({
    method: 'post',
    path: '/',
    body: {
      email: chance.email(),
      products: [chance.guid()],
      phone: chance.phone(),
      paymentMethod: 'visa',
      cardHolderName: chance.name({ full: true }),
    },
  })

  expect(response.statusCode).toBe(200)
  expect(response.json()).toEqual({
    success: true,
  })
})

it('returns errorCode when payment fails', async () => {
  server.use(
    http.post(`${PAYMENT_API_URI}/payment`, async () => {
      return HttpResponse.json(null, { status: 400 })
    })
  )

  const app = fastify()

  app.register(checkoutRoutes, {
    env: {
      PAYMENT_API: PAYMENT_API_URI,
    },
  } as PluginOptions)

  const response = await app.inject({
    method: 'post',
    path: '/',
    body: {
      email: chance.email(),
      products: [chance.guid()],
      phone: chance.phone(),
      paymentMethod: 'visa',
      cardHolderName: chance.name({ full: true }),
    },
  })

  expect(response.statusCode).toBe(400)
  expect(response.json()).toEqual({
    success: false,
    errorCode: 'PAYMENT_FAILED',
  })
})
