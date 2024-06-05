import Router from 'koa-router';

import db from '#src/db.js';

const router = new Router();

router.get('/hello', async ctx => {
  const result = await db.raw('SELECT NOW()');
  ctx.body = { message: `Hello World, current time: ${result.rows[0].now}` };
});

export default router;
