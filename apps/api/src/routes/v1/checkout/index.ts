import { FastifyPluginAsync } from 'fastify'
import { ReplySchema, RequestBodyType, bodySchema, replySchema } from './schema'
import { PluginOptions } from '@src/types'

const checkoutRoutes: FastifyPluginAsync<PluginOptions> = async (
  fastify,
  { env }
) => {
  fastify.post<{ Body: RequestBodyType; Reply: ReplySchema }>(
    '/',
    { schema: { body: bodySchema, response: { 200: replySchema } } },
    async (req, reply) => {
      const paymentResponse = await fetch(`${env.PAYMENT_API}/payment`, {
        method: 'post',
        body: JSON.stringify(req.body),
      })

      if (paymentResponse.ok) {
        return {
          success: true,
        }
      }

      return reply.status(400).send({
        success: false,
        errorCode: 'PAYMENT_FAILED',
      })
    }
  )
}

export default checkoutRoutes
