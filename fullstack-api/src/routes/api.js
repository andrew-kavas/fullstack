import Router from 'koa-router';

import db from '#src/db.js';

const { console } = globalThis;

const router = new Router();

router.get('/hello', async ctx => {
  const result = await db.raw('SELECT NOW()');

  const test = await db.select().from('users');
  console.log(test);

  ctx.body = { message: `Hello World, current time: ${result.rows[0].now}` };
});

export default router;
