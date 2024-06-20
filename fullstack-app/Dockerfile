# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# # Build the React app
RUN npm run build

# Create a symlink for src
# RUN ln -s /app/src /app/node_modules/src

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]

# RUN npm run build

RUN \
  export NGINX_VERSION='1.27.0' && \
  apk add --no-cache brotli-dev pcre-dev && \
  apk add --no-cache --virtual tmp g++ git make && \
  cd /tmp && \
  mkdir nginx ngx_brotli ngx_headers_more && \
  wget -O - https://nginx.org/download/nginx-$NGINX_VERSION.tar.gz | \
    tar xz --strip-components 1 -C nginx && \
  git clone --depth 1 --recurse-submodules \
    https://github.com/google/ngx_brotli && \
  wget -O - https://github.com/openresty/headers-more-nginx-module/archive/master.tar.gz | \
    tar xz --strip-components 1 -C ngx_headers_more && \
  cd nginx && \
  ./configure \
    --add-module=/tmp/ngx_brotli \
    --add-module=/tmp/ngx_headers_more \
    --without-http_gzip_module && \
  make && \
  make install && \
  ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx && \
  rm -fr nginx ngx_brotli ngx_headers_more && \
  apk del --purge tmp

# # Use an official Node.js runtime as a parent image
# FROM node:14

# # Set the working directory
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the React app
# RUN npm run build

# # Install nginx
# RUN apt-get update && apt-get install -y nginx

# # Copy built files to nginx
# RUN mkdir -p /var/www/app
# RUN cp -r build/* /var/www/app/

# # Copy nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

# # Expose the port the app runs on
# EXPOSE 3000

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]


# PROD BUILD


# FROM nginx

# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80/tcp

# CMD ["/usr/sbin/nginx", "-g", "daemon off;"]


# # Install serve to serve the build
# RUN npm install -g serve

# # Create a symlink for src
# RUN ln -s /app/src /app/node_modules/src

# # Expose the port the app runs on
# EXPOSE 3000

# # Define the command to run the app
# CMD ["serve", "-s", "build"]