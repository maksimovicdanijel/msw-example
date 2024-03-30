import closeWithGrace from 'close-with-grace'
import fastify from 'fastify'
import server from './server'

import { env } from './env'

const main = async () => {
  const app = fastify({
    logger: true,
  })

  app.register(server)

  const closeHandlers = closeWithGrace(
    { delay: 500 },
    async ({ err, signal }) => {
      if (err) {
        app.log.error(err)
      }

      app.log.info(`Signal ${signal} received, closing server 👋`)

      await app.close()
    }
  )

  app.addHook('onClose', async () => {
    closeHandlers.close()
  })

  await app.listen({ port: env.PORT })
}

main().catch(console.log)
