import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import Orders from '../pages/Orders';
import Manage from '../pages/Manage';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/customer/products',
      element: <Products />,
    },
    {
      path: '/seller/orders/',
      element: <Orders />,
    },
    {
      path: '/admin/manage',
      element: <Manage />,
    },
  ]);
}
