import fastify from 'fastify'
import healthRoutes from '.'

it('returns 200', async () => {
  const app = fastify()

  app.register(healthRoutes)

  const response = await app.inject({
    method: 'get',
    path: '/',
  })

  expect(response.statusCode).toBe(200)
})
