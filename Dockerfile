# ======================
# Builder
# ======================

FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build:staging


# ======================
# Runtime
# ======================

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 5019

CMD ["node", "server.js"]
