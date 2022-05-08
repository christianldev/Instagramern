import React from 'react';

//Layouts

import NavbarLayout from '../layouts/NavbarLayout';

// pages

import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';
import EditProfile from '../pages/EditProfile';

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
    path: 'account/edit',
    layout: <NavbarLayout />,
    element: <EditProfile />,
    exact: true,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];

export default routes;
