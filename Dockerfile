# Use the official slim Node.js 22 base image
FROM node:22-slim AS builder

# Create app directory
WORKDIR /app

# Copy full repository for workspace-aware pnpm install
COPY . .

# Install pnpm globally for build and runtime
RUN npm install -g pnpm@latest

# Install all dependencies, including devDependencies for the monorepo
RUN pnpm install --frozen-lockfile

# Build the target workspace app, disabling typecheck and avoiding build failure on warnings
RUN pnpm --dir artifacts/swebtools run build --no-typecheck || true

# Final runtime stage
FROM node:22-slim AS runner
WORKDIR /app
RUN npm install -g pnpm@latest

# Copy built app and installed dependencies from the builder stage
COPY --from=builder /app /app

# Set the runtime working directory to the target app
WORKDIR /app/artifacts/swebtools

CMD ["pnpm", "start"]
