const { process } = globalThis;

let { env } = process;

const { VERSION: version } = env;

if (version === 'development') {
  env = {
    ...env,
    FULLSTACK_API_URL: 'http://localhost:4000',
    FULLSTACK_APP_URL: 'http://localhost:3000'
  };
}

const config = {
  fullstack: {
    // apiUrl: 'https://fullstack-api.fly.dev',
    apiUrl: env.FULLSTACK_API_URL,
    // appUrl: 'https://fullstack-app.fly.dev'
    appUrl: env.FULLSTACK_APP_URL
  },
  port: version === 'development' ? 3000 : 80,
  version
};

export default config;
