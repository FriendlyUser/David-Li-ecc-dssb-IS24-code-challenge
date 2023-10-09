# docker file
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the built React app
RUN npm install -g serve

# Expose the port that the server will run on (default is 5000)
EXPOSE 3000

# Serve app
CMD ["serve", "-s", "build", "-l", "3000"]
