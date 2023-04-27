# Build stage
FROM node:16-alpine3.14 AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:16-alpine3.14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the built Next.js application to the container
COPY --from=build /app/out ./out

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port 3000 for the application
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]