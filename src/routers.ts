import * as Router from 'koa-router';
import graphqlHTTP from 'koa-graphql'
import { Context, Next } from "koa";
import QuerySchema from "./graphql/schema/QuerySchema";

const router = new Router();

router.get('/', (ctx: Context, next: Next)=> {
    ctx.response.body="Hello world!"
})
console.log("graphqlHTTP", graphqlHTTP)
// router.all('/graphQL', graphqlHTTP({
//   schema: QuerySchema,
//   graphiql: true
// }))
export default router;
