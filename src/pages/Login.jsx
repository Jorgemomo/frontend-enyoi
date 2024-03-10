import React, { useContext } from "react";

import { AuthContext } from "../auth/AuthContext";

const Login = () => {
  const user = useContext(AuthContext);

  return (
    <div className="mt-10">
      <h1>Login</h1>
      <h1 className="text-3xl font-bold underline">
        Hola nuevamente {user.user} desde login
      </h1>
    </div>
  );
};

export default Login;
