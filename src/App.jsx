import "./assets/css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RequireAuth from "./auth/auth";

import { Home, Login, Register, Dashboard, Quotes } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quotes" element={<Quotes />} />

          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
