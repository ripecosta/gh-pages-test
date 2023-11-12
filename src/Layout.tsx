import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
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
