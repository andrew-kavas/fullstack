// const { process } = globalThis;

// todo: figure out envars
// let { env } = process;

// const { VERSION: version } = env;
const version = 'development';

// if (version === 'development') {
const env = {
  // TODO: Update these values
  // add /api to API_URL foor fullstack api
  FULLSTACK_API_URL: 'http://localhost:4000',
  FULLSTACK_APP_URL: 'http://localhost:3000'
  // ...env
};
// }

export default {
  fullstack: {
    apiUrl: env.FULLSTACK_API_URL,
    appUrl: env.FULLSTACK_APP_URL
  },
  testSecret: env.TEST_SECRET,
  version
};
