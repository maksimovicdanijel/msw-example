# Base image
FROM node:20.11.1-alpine3.19 AS base


RUN apk update && apk add --no-cache dumb-init

# Builder Stage
FROM base AS builder

RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
USER nodejs
RUN mkdir -p /home/nodejs/app/node_modules && chown -R nodejs:nodejs /home/nodejs/app

WORKDIR /home/nodejs/app

COPY --chown=nodejs:nodejs package*.json tsconfig.json ./

RUN npm install && npm cache verify

COPY --chown=nodejs:nodejs . .

RUN npm run build

# Run Stage
FROM base

RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
USER nodejs
RUN mkdir -p /home/nodejs/app/node_modules && chown -R nodejs:nodejs /home/nodejs/app

WORKDIR /home/nodejs/app

COPY --chown=nodejs:nodejs package*.json ./

RUN npm pkg delete scripts.prepare
RUN npm install --only=production

COPY --from=builder /home/nodejs/app/dist .

EXPOSE 3000
CMD ["dumb-init", "node", "./src/index.js"]
