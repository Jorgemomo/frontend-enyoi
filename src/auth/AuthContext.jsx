import React, { useState } from "react";
import { fakeAuthProvider } from "./auth";

export const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  let [user, setUser] = useState("");

  let signin = (newUser, callback) => {
    const { name } = newUser;
    return fakeAuthProvider.signin(() => {
      setUser(name);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
