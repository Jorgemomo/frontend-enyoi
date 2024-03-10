import React, { useState } from "react";
import { fakeAuthProvider } from "./auth";

export const AuthContext = React.createContext({});

function AuthProvider({ children }) {
  let [user, setUser] = useState("Luis");

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
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
