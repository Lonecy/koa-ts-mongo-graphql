import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import AppRouter from './routers';
import DbConn from "./db/DbConn";
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
import QuerySchema from "./graphql/schema/QuerySchema";

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

//路由
//AppRoutes.forEach(route => router[route.method](route.path, route.action));
router.use(AppRouter.routes())
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(mount("/graphql", graphqlHTTP({
  schema: QuerySchema,
  graphiql: true
})));

app.listen(port);
DbConn.conn();

console.log(`应用启动成功 端口:${port}`);