import { FastifyPluginAsync } from 'fastify'

const healthRoutes: FastifyPluginAsync = async fastify => {
  fastify.get('/', (_, reply) => {
    reply.send()
  })
}

export default healthRoutes
