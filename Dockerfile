# FROM node:22-alpine

# WORKDIR /app

# COPY package.json yarn.lock ./

# RUN yarn install

# COPY . .

# RUN yarn build:staging

# CMD ["yarn","start:staging"]



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

FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 5019

CMD ["yarn","start:staging"]
