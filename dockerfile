FROM docker.io/node:18-alpine

# These are the public node url and the database url of the wundergraph node you want to include in the generated client
ARG wg_public_node_url
ARG DATABASE_URL
ARG SMART_OFFICE_DATABASE_URL
ARG LIVING_BALANCE_DATABASE_URL
ARG GUARDIAN_ONLINE_DATABASE_URL
ARG GPAC_DATABASE_URL
ARG CLIENT_PORTAL_DATABASE_URL


# Set environment variables
ENV DATABASE_URL=$DATABASE_URL
ENV SMART_OFFICE_DATABASE_URL=$SMART_OFFICE_DATABASE_URL
ENV LIVING_BALANCE_DATABASE_URL=$LIVING_BALANCE_DATABASE_URL
ENV GUARDIAN_ONLINE_DATABASE_URL=$GUARDIAN_ONLINE_DATABASE_URL
ENV GPAC_DATABASE_URL=$GPAC_DATABASE_URL
ENV CLIENT_PORTAL_DATABASE_URL=$CLIENT_PORTAL_DATABASE_URL
ENV CI=true WG_COPY_BIN_PATH=/usr/bin/wunderctl
ENV WG_NODE_HOST=0.0.0.0 WG_PUBLIC_NODE_URL=${wg_public_node_url}

WORKDIR /app


# Copy files and install dependencies
COPY package-lock.json package.json /app/
COPY ./prisma ./prisma
COPY ./generated ./generated
RUN pnpm install --prefer-offline --production

# Copy the .wundergraph folder to the image
COPY .wundergraph ./.wundergraph

# Generate Prisma client and Wundergraph client
RUN pnpm run build:wundergraph

# Expose only the node, server is private
EXPOSE 9991

CMD wunderctl start --wundergraph-dir=.wundergraph
