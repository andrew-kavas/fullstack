export default {
  client: 'pg',
  connection: {
    host: 'db',
    user: 'postgres',
    password: 'password',
    database: 'mydatabase'
  },
  migrations: {
    directory: '../src/migrations'
  }
};
