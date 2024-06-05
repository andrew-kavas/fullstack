import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import apiRouter from '#src/routes/api.js';

const { console, process } = globalThis;

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
