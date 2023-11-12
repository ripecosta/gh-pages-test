import { createHashRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import { SomePage } from './pages/SomePage';
import './App.css';
import { Index } from './pages/Index';
import { AboutUs } from './pages/AboutUs';
import { NotFound } from './errors/NotFound';

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Index /> },
        { path: '/aboutus', element: <AboutUs /> },
        { path: '/somepage', element: <SomePage /> },

        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;

const Layout = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/somepage">Some Page</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Outlet />
      </div>
    </>
  );
};
