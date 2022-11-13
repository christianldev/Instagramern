import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { getToken } from '../utils/token';

const httpLink = createUploadLink({
  uri: 'https://instagram-clone-server-production.up.railway.app/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  },
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `wss://insta-merng-server.herokuapp.com/graphql`,
    options: { reconnect: true },
    connectionParams: {
      headers: {
        Authorization: getToken() ? `Bearer ${getToken()}` : null,
      },
    },
  }),
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getFollowers: {
            merge: (existing, incoming) => {
              return incoming;
            },
          },
          getFollowing: {
            merge: (existing, incoming) => {
              return incoming;
            },
          },
        },
      },
    },
  }),
  link: splitLink,
});

export default client;
