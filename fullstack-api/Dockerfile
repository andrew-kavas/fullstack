# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a symlink for src
RUN ln -s /app/src /app/node_modules/src

# Copy the bin directory
COPY bin ./bin

# Make the migrate and rollback scripts executable
RUN chmod +x ./bin/migrate
RUN chmod +x ./bin/rollback
RUN chmod +x ./bin/seed

# Expose the port the app runs on
EXPOSE 4000

# Define the command to run the app
CMD ["sh", "-c", "./bin/seed && npm run dev"]