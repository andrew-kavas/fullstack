# Use an official Node.js runtime as a parent image
FROM node:alpine as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# todo: conditionally expose 3000 if dev or 80 if prod
EXPOSE 3000
EXPOSE 80

# todo: multi-stage build with build-target specified in fly config and compose file (or bin/up)

# Command to run Vite
# for "production"
# CMD ["npm", "run", "devBuild"] 
# for "development"
CMD ["npm", "run", "dev"]
