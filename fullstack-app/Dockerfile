# Use an official Node.js runtime as a parent image
FROM node:alpine as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses by default
# EXPOSE 3000
EXPOSE 80

# Command to run Vite
CMD ["npm", "run", "dev"]
