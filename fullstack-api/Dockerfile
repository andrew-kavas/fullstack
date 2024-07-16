# Use an official Node.js runtime as a parent image
FROM node:alpine as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# for "production"
FROM build as production
CMD ["sh", "-c", "./bin/migrate && ./bin/seed && npm run start"]
RUN echo "Running in production mode"

# for "development"
FROM build as development
CMD ["sh", "-c", "./bin/migrate && ./bin/seed && npm run dev"]
RUN echo "Running in development mode"
