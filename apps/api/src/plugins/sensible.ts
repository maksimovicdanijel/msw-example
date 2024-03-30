import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import sensible from '@fastify/sensible'

const sensiblePlugin: FastifyPluginAsync = async fastify => {
  fastify.register(sensible),
    {
      errorHandler: false,
    }
}

export default fp(sensiblePlugin)
