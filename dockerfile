FROM docker.io/node:18-alpine

# These are the public node url and the database url of the wundergraph node you want to include in the generated client
ARG wg_public_node_url
ARG DATABASE_URL

# Set environment variables
ENV DATABASE_URL=$DATABASE_URL
ENV CI=true WG_COPY_BIN_PATH=/usr/bin/wunderctl

WORKDIR /app

# Install pnpm globally in your Docker image
RUN npm install -g pnpm

# Copy files and install dependencies
COPY pnpm-lock.yaml package.json /app/
COPY ./prisma ./prisma
RUN pnpm install --prefer-offline

# Copy the .wundergraph folder to the image
COPY .wundergraph ./.wundergraph

ENV WG_NODE_URL=http://127.0.0.1:9991 WG_NODE_INTERNAL_URL=http://127.0.0.1:9993 WG_NODE_HOST=0.0.0.0 WG_NODE_PORT=9991 WG_NODE_INTERNAL_PORT=9993 WG_SERVER_URL=http://127.0.0.1:9992 WG_SERVER_HOST=127.0.0.1 WG_SERVER_PORT=9992
ENV WG_PUBLIC_NODE_URL=${wg_public_node_url}
# Generate Prisma client and Wundergraph client
RUN pnpm run build:wundergraph

# Expose only the node, server is private
EXPOSE 9991

CMD wunderctl start --wundergraph-dir=.wundergraph
