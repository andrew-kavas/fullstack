import knex from 'knex';

import knexConfig from '#src/knexfile.js';

const db = knex(knexConfig);

export default db;
