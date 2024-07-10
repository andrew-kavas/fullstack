// todo: prod vs dev config

// prod
export default {
  client: 'pg',
  connection: {
    host: 'todo',
    user: 'todo',
    password: 'todo',
    database: 'todo'
  },
  migrations: {
    directory: '../src/migrations'
  }
};

// dev
// export default {
//   client: 'pg',
//   connection: {
//     host: 'db',
//     user: 'postgres',
//     password: 'password',
//     database: 'mydatabase'
//   },
//   migrations: {
//     directory: '../src/migrations'
//   }
// };
