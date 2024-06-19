# Fullstack
what: minimalist fullstack scaffold  
why: prototyping fullstack applications  
how: react app, koa api, persistent postgres volumes -- all dockerized and filled with examples / notes

## to build and start:
run bin/up from fullstack-dev directory

## to add a migration
just add a new file to api/migrations/ OR
knex migrate:make migration_name --knexfile src/knexfile.js

## db functions
from fullstack-dev, simply run: `bin/run $FUNCTION`
for example: `bin/run migrate`, `bin/run rollback` and `bin/run seed`


<!-- TODO 
add work processor
add api routing
add app routing
-->

<!-- DONE 
add db migration
-->
