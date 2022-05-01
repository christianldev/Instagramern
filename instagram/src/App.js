import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import Auth from './pages/Auth';
import { decodeToken, getToken, removeToken } from './utils/token';
import AuthContext from './context/AuthContext';
import { authentication } from './firebase.config.js';
import Navigation from './routes/Navigation';
import {
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setAuth(null);
    } else if (token) {
      setAuth(decodeToken(token));
    } else {
      onAuthStateChanged(authentication, (currentUser) => {
        console.log({ currentUser });
        setAuth(currentUser);
      });
    }
  }, []);

  const logout = () => {
    removeToken();
    setAuth(null);
  };

  const setUser = (user) => {
    setAuth(user);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(authentication, facebookProvider);
  };

  const authData = useMemo(
    () => ({
      auth,
      setUser,
      logout,
      loginWithFacebook,
    }),
    [auth],
  );

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Navigation />}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
