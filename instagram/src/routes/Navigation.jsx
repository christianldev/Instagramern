import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import { map } from 'lodash';
import NavbarLayout from '../layouts/NavbarLayout';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => (
          <Route key={index} path="/" element={route.layout}>
            <Route {...route} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
