import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`
const resolvers = {
  Query: {
    books: () => [
      {
        title: 'The Awakening',
        author: 'Kate Chopin',
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster',
      },
    ],
  },
}

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, { listen: { port: 4000  } });

  console.log(`🚀 Server ready at: ${url}`);
}

startApolloServer().catch(err => console.error(`Error starting server: ${err}`));

