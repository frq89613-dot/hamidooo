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
RUN pnpm --dir artifacts/swebtools run build

# Print the dist directory contents for debugging and CI logs
RUN ls -R /app/artifacts/swebtools/dist

# Runner stage using Nginx to serve the built static site
FROM nginx:alpine AS runner

# Copy built static files from the builder stage
COPY --from=builder /app/artifacts/swebtools/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
