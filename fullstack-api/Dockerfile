# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Define the command to run the app
CMD ["sh", "-c", "./bin/seed && npm run dev"]

# Not needed?
# # Create a symlink for src
# RUN ln -s /usr/src/app/src /usr/src/app/node_modules/src

# # Copy the bin directory
# COPY bin ./bin

# # Make the migrate and rollback scripts executable
# RUN chmod +x ./bin/migrate
# RUN chmod +x ./bin/rollback
# RUN chmod +x ./bin/seed
