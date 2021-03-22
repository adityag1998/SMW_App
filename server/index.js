import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { MONGODB } from './config.js';
import { typeDefs } from '../server/graphQL/typeDefs.js';
import { resolvers } from '../server/graphQL/resolvers/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen({ port: 5000 }))
  .then(res => console.log(`Server Running at ${res.url}`));
