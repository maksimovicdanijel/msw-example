import { Static, Type } from '@sinclair/typebox'

export const bodySchema = Type.Object({
  email: Type.String({ format: 'email' }),
  phone: Type.String(),
  paymentMethod: Type.String(),
  cardHolderName: Type.String(),
  products: Type.Array(Type.String({ format: 'uuid' })),
})

export const replySchema = Type.Object({
  success: Type.Boolean(),
  errorCode: Type.Optional(Type.Union([Type.Literal('PAYMENT_FAILED')])),
})

export type RequestBodyType = Static<typeof bodySchema>
export type ReplySchema = Static<typeof replySchema>
