# Builder stage using Node.js 22 slim
FROM node:22-slim AS builder
WORKDIR /app

# Copy full repository so pnpm can detect the monorepo workspace
COPY . .

# Install pnpm globally for the build
RUN npm install -g pnpm@latest

# Install dependencies for the monorepo workspace
RUN pnpm install --frozen-lockfile

# Build the frontend app from the swebtools workspace
RUN pnpm --dir artifacts/swebtools run build

# Runner stage using Nginx to serve the built static site
FROM nginx:alpine AS runner

# Copy built static files from the builder stage
COPY --from=builder /app/artifacts/swebtools/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
