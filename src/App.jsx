import "./assets/css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "./auth/auth";

import { Home, Login, Register, Dashboard, Quotes } from "./pages";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/quotes"
              element={
                <RequireAuth>
                  <Quotes />
                </RequireAuth>
              }
            />

            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
