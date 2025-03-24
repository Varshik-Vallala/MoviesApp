# 🏗️ Stage 1: Build the React App
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build


# 🚀 Stage 2: Serve the App with Nginx
FROM nginx:alpine

# Copy built React files to Nginx's default serving directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

