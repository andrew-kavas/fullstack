# Use an official Node.js runtime as a parent image
FROM node:22.3.0-alpine3.20

# Set the working directory
WORKDIR /app

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

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a symlink for src
RUN ln -s /app/src /app/node_modules/src

# Expose the port the app runs on
EXPOSE 3000

# todo: check
# ARG VERSION
# ARG TEST_SECRET

# Define the command to run the app
CMD ["npm", "start"]

# PROD BUILD
# # Build the React app
# RUN npm run build

# # Install serve to serve the build
# RUN npm install -g serve

# # Create a symlink for src
# RUN ln -s /app/src /app/node_modules/src

# # Expose the port the app runs on
# EXPOSE 3000

# # Define the command to run the app
# CMD ["serve", "-s", "build"]