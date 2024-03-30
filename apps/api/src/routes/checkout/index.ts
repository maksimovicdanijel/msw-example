import { FastifyPluginAsync } from 'fastify'

const checkoutRoutes: FastifyPluginAsync = async fastify => {
  fastify.post('/', (req, reply) => {})
}

export default checkoutRoutes
