import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import React from 'react';
import { Layout } from './Layout';

const Index = React.lazy(() => import('./pages/Index'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const SomePage = React.lazy(() => import('./pages/SomePage'));
const NotFound = React.lazy(() => import('./errors/NotFound'));

const Lazy = ({ Elem }: { Elem: React.LazyExoticComponent<() => JSX.Element> }): JSX.Element => {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Elem />
    </React.Suspense>
  );
};

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Lazy Elem={Index} /> },
        { path: '/aboutus', element: <Lazy Elem={AboutUs} /> },
        { path: '/somepage', element: <Lazy Elem={SomePage} /> },

        { path: '*', element: <Lazy Elem={NotFound} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
