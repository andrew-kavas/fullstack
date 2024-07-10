import config from '#src/config.js';

const { url } = config.postgres;

export default {
  client: 'pg',
  connection: url,
  migrations: {
    directory: '../src/migrations'
  }
};
