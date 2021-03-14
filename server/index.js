import { ApolloServer, gql } from 'apollo-server';
import { MONGODB } from './config.js';
import mongoose from 'mongoose';

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => 'Hello World!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen({ port: 5000 }))
  .then(res => console.log(`Server Running at ${res.url}`));
