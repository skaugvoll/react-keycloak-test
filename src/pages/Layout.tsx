import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/404">Undefined</Link>
          </li>
          <li>
            <Link to="/secured">secured</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
