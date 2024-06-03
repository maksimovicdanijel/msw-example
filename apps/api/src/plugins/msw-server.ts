import { PluginOptions } from '@src/types'
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'

const mswServerPlugin: FastifyPluginAsync<PluginOptions> = async (
  fastify,
  { env }
) => {
  if (env.MOCK_PAYMENT_API) {
    const server = setupServer()

    server.use(
      http.post(`${env.PAYMENT_API}/payment`, async () => {
        return HttpResponse.json(null, { status: 200 })
      })
    )

    server.listen()

    fastify.addHook('onClose', async () => {
      server.close()
    })
  }
}

export default fp(mswServerPlugin)
