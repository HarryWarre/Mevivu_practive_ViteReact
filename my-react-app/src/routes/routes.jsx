// routes.js (hoặc routes.jsx)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import CreateUser from "../components/formCreateUser";

function UserRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
      </Routes>
    </Router>
  );
}

export default UserRoutes;
