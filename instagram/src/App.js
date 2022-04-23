import React, { useState } from 'react';
import './App.css';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import Auth from './pages/Auth';

function App() {
  const [auth, setAuth] = useState(undefined);

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <div>Hello</div>}
    </ApolloProvider>
  );
}

export default App;
