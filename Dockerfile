# Builder stage using Node.js 22 slim
FROM node:22-slim AS builder
WORKDIR /app

# Copy full repository so pnpm can detect the monorepo workspace
COPY . .

# Install pnpm globally for the build
RUN npm install -g pnpm@latest

# Install dependencies using the root pnpm-lock.yaml inside the monorepo
RUN pnpm install --frozen-lockfile

# Build the frontend app from the swebtools workspace
# Note: Vite outputs to dist/public directory as per vite.config.ts
RUN pnpm --dir artifacts/swebtools run build

# Print the dist directory contents for debugging and CI logs
RUN ls -R /app/artifacts/swebtools/dist

# Runner stage using Nginx to serve the built static site
FROM nginx:alpine AS runner

# Copy built static files from the builder stage to nginx root
# Important: Vite outputs to dist/public, not dist
COPY --from=builder /app/artifacts/swebtools/dist/public /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Optional: Add health check for Coolify
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/index.html || exit 1

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
