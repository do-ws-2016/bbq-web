import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://bbq-server.dev.jonas-faber.me/graphql',
  }),
});
export default props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
);
