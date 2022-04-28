// pages

import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';

const routes = [
  {
    path: '/',
    element: Home,
    exact: true,
  },
  {
    path: '/user',
    element: User,
    exact: true,
  },
  {
    path: '*',
    element: Error404,
  },
];

export default routes;
