import React from "react";

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul className="w-ful flex flex-row justify-end h-11 bg-sky-600 text-white">
        <li className="mx-5 text-lg">
          <Link to="/home">home Page</Link>
        </li>
        <li className="mx-5 text-lg">
          <Link to="/quotes">Citas</Link>
        </li>
        <li className="mx-5 text-lg">
          <Link to="/login">Login</Link>
        </li>
        {/* <li>
          <Link to="/protected">Protected Page</Link>
        </li> */}
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
