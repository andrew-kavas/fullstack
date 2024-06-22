import Router from 'koa-router';

import config from '#src/config.js';
import db from '#src/db.js';

const { console } = globalThis;

const router = new Router();

router.get('/hello', async ctx => {
  const result = await db.raw('SELECT NOW()');

  const test = await db.select().from('users');
  console.log(test);

  console.log(config);

  ctx.body = {
    message: `Hello World, I'm Andrew Kavas! Current time: ${result.rows[0].now}`
  };
});

export default router;
