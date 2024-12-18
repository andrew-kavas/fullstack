# Fullstack
what: minimalist fullstack scaffold  
why: prototyping fullstack applications  
how: react app, koa api, built with vite, deployed to fly.io, persistent postgres volumes -- all dockerized and filled with examples / notes

## to build and start:
clone this repo and cd into fullstack/fullstack-dev \
`cd fullstack-dev`  
`bin/setup`  
`bin/up`

## Environment / Deploy
set POSTGRES_URL in fly.io secrets

set FLY_API_TOKEN_API in GH secrets \
set FLY_API_TOKEN_APP in GH secrets

## to add a migration
just add a new file to api/migrations/ OR
knex migrate:make migration_name --knexfile src/knexfile.js

## running docker compose commands
`dc exec {{service}} {{command}}` \
examples: \
`dc exec api bin/migrate`
`dc exec api bin/rollback`
`dc exec api bin/lint`
`dc exec api bin/seed`
`dc exec app bin/lint`

## TODO:
APP: \
app routing \
lazyloading \
app disk and history \
.env file
  defined with script in index.html <head> that pulls vars from a file that is created every build

API:
createdAt on every table \
api routing \
api query language and schema builder \
work processor

OTHER: \
dev vs prod envars \
  APP ENVARS -- RUN DIFFERENT DOCKER COMMANDS DEPENDING ON PROD OR DEV \
internal slack notifications \
new eslint-config \
rewrite linter
  show detailed tsc errors \
query language \
rate-limiting \
nginx \
tests \
error reporting


<!-- DONE 
deploy through GH actions \
  on push to main 
  to fly if configured 

try jsdoc
Vite!
api .env file
db migrations
-->
