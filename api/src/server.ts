import autoload from '@fastify/autoload'
import { FastifyPluginAsync } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import path from 'path'
import { env } from './env'

const server: FastifyPluginAsync = async fastify => {
  fastify
    .register(autoload, {
      dir: path.join(__dirname, 'plugins'),
      options: { env },
    })
    .register(autoload, {
      dir: path.join(__dirname, 'routes'),
      options: { env },
    })
}

export default fastifyPlugin(server)
