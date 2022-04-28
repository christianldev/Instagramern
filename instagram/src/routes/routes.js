import React from 'react';

//Layouts

import NavbarLayout from '../layouts/NavbarLayout';

// pages

import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';

const routes = [
  {
    index: true,
    layout: <NavbarLayout />,
    element: <Home />,
    exact: true,
  },
  {
    path: ':username',
    layout: <NavbarLayout />,
    element: <User />,
    exact: true,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];

export default routes;
