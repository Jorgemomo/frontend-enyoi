import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

import { useNavigate, Link, Outlet } from "react-router-dom";

import Permissions from "../../utils/permissions";

const Layout = () => {
  const { signout } = useContext(AuthContext);

  const navigate = useNavigate();

  const cbRedirect = () => {
    navigate("/login");
  };

  const fnLogOut = () => {
    localStorage.removeItem("userInfo");
    signout(cbRedirect);
  };

  return (
    <div>
      <ul className="w-full flex flex-row justify-end h-11 bg-sky-600 text-white">
        <li className="mx-5 text-lg">
          <Link to="/">Home</Link>
        </li>

        <Permissions>
          <li className="mx-5 text-lg">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-5 text-lg">
            <Link to="/quotes">Citas</Link>
          </li>
        </Permissions>

        <li className="mx-5 text-lg">
          <Link to="/register">Registro</Link>
        </li>
        <li className="mx-5 text-lg">
          <Link to="/login">Login</Link>
        </li>

        <Permissions>
          <li className="mx-5 text-lg">
            <Link onClick={fnLogOut}>Salir</Link>
          </li>
        </Permissions>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
