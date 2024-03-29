# Install dependencies only when needed
FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

#RUN addgroup -g 1001 -S nodejs
#RUN adduser -S nextjs -u 1001

COPY . .
COPY --from=deps /app/node_modules ./node_modules

#USER nextjs

EXPOSE 3000

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start:docker"]