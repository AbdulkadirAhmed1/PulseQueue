# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Start the API
CMD ["npm", "run", "dev"]