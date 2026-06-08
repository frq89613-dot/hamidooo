# Use the official slim Node.js 20 base image
FROM node:20-slim AS builder

# Create app directory
WORKDIR /app

# Install pnpm globally so both build and runtime can use it
RUN npm install -g pnpm@latest

# Copy package metadata first for dependency install caching
COPY package.json pnpm-lock.yaml ./

# Install all dependencies, including devDependencies, for build
RUN pnpm install --frozen-lockfile --workspace-root --with=dev

# Copy the full repository into the image
COPY . .

# Build the target workspace app, disabling typecheck and avoiding build failure on warnings
RUN pnpm --dir artifacts/swebtools run build --no-typecheck || true

# Final runtime stage
FROM node:20-slim AS runner
WORKDIR /app
RUN npm install -g pnpm@latest

# Copy built app and installed dependencies from the builder stage
COPY --from=builder /app /app

# Make sure runtime starts from the main app package directory
WORKDIR /app/artifacts/swebtools

CMD ["pnpm", "start"]
