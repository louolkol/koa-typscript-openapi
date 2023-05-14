import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { koaSwagger } from 'koa2-swagger-ui';
import YAML from 'yamljs';
import path from 'path';

const app = new Koa();
const router = new Router();

router.get('/hello', async (ctx) => {
  ctx.body = {
    message: 'Hello, world!',
  };
});

// Load the YAML file and parse it
const spec = YAML.load(path.join(__dirname, 'openapi.yaml'));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// Use the parsed specification in Koa2-swagger-ui
app.use(koaSwagger({routePrefix: '/swagger', swaggerOptions: { spec } }));




app.use(router.routes());
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
