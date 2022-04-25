import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import Auth from './pages/Auth';
import { getToken } from './utils/token';
import AuthContext from './context/AuthContext';

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setAuth(null);
    } else {
      setAuth(token);
    }
  }, []);

  const logout = () => {
    console.log('Sesion cerrada');
  };

  const setUser = (user) => {
    setAuth(user);
  };

  const authData = useMemo(
    () => ({
      auth,
      setUser,
      logout,
    }),
    [auth],
  );

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <div>Hello</div>}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
