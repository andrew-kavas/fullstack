const { process } = globalThis;

let { env } = process;

const { VERSION: version } = env;

if (version === 'development') {
  env = {
    POSTGRES_URL: 'postgresql://postgres:password@db/mydatabase',
    apiUrl: 'http://localhost:4000',
    appUrl: 'http://localhost:3000',
    ...env
  };
}

const config = {
  fullstack: {
    apiUrl: env.FULLSTACK_API_URL,
    appUrl: env.FULLSTACK_APP_URL
  },
  postgres: {
    url: env.POSTGRES_URL
  },
  testSecret: env.TEST_SECRET,
  version
};

export default config;
