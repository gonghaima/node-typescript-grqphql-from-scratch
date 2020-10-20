const { ApolloServer, gql } = require('apollo-server-fastify');

import depthLimit from 'graphql-depth-limit';
import schema from './schema';
const app = require('fastify')();
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});

(async function () {
    app.register(server.createHandler());
    await app.listen(3000);
})();