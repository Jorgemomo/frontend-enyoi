import React, { useContext } from "react";

import { AuthContext } from "../../auth/AuthContext";

const PrimerComponente = () => {
  const user = useContext(AuthContext);

  // console.log(user);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello {user.user}</h1>
    </>
  );
};

export default PrimerComponente;
