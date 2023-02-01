# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

#Setup user to run the build
WORKDIR /uerkio

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /uerkio


COPY --from=deps /uerkio/node_modules ./node_modules
# Copy the whole tree down
COPY ./ ./

# Leaving this out as I'll be manually building the .next project using a script to speed up overhead
RUN npm run build

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1



# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /uerkio

COPY --from=builder /uerkio/ /uerkio

# Run pm2 installation before running pm2-runtime
RUN npm install --global pm2

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

EXPOSE 3001

ENV PORT 3001

# Launch app with PM2
CMD [ "pm2-runtime", "ecosystem.config.js" ]