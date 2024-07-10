# Fullstack
what: minimalist fullstack scaffold  
why: prototyping fullstack applications  
how: react app, built with vite, koa api, persistent postgres volumes -- all dockerized and filled with examples / notes

## to build and start:
clone this repo and cd into fullstack/fullstack-dev \
`cd fullstack-dev`  
`bin/setup`  
`bin/up`

## to add a migration
just add a new file to api/migrations/ OR
knex migrate:make migration_name --knexfile src/knexfile.js

## db functions
from fullstack-dev, simply run: `bin/run $FUNCTION`
for example: `bin/run migrate`, `bin/run rollback` and `bin/run seed`


<!-- TODO 
NEXT:
dev vs prod envars
Vite!

APP: 
.env file
  defined with script in index.html <head> that pulls vars from a file
  that is created every build
find a web bundler, something like CORS or webpack?. look at Vite

API:
api routing
api query language and schema builder
work processor

APP:
app routing
app disk and history

OTHER:
GH actions
-->

<!-- DONE 
api .env file
db migrations
-->
