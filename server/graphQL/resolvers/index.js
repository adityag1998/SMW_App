import { HELLO_WORLD } from './helloWorld.js';
import { GET_POSTS } from './posts.js';

export const resolvers = {
  Query: {
    ...HELLO_WORLD.Query,
    ...GET_POSTS.Query,
  },
  Mutation: {
    
  }
};
