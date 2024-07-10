const { process } = globalThis;

let { env } = process;

const { VERSION: version } = env;

if (version === 'development') {
  env = {
    FULLSTACK_API_URL: 'http://localhost:4000',
    FULLSTACK_APP_URL: 'http://localhost:3000',
    ...env
  };
}

const config = {
  fullstack: {
    apiUrl: 'https://fullstack-api.fly.dev',
    appUrl: 'https://fullstack-app.fly.dev'
  },
  port: version === 'development' ? 3000 : 80
};

export default config;
