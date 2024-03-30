import { FastifyPluginAsync } from 'fastify'

const productRoutes: FastifyPluginAsync = async fastify => {
  fastify.get('/', (req, reply) => {
    return reply.send([
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Hoodie 1',
        price: 30,
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'T-Shirt',
        price: 40,
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'T-Shirt 2',
        price: 60.35,
      },
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'T-Shirt 3',
        price: 55.35,
      },
    ])
  })
}

export default productRoutes
