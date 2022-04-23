import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
