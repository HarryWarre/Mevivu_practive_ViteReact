// routes.js (hoặc routes.jsx)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../components/App";
import CreateUser from "../components/userCreate";
import UserDetails from "../components/userDetail";
import UserUpdate from "../components/userUpdate";

function UserRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/detail/:id" element={<UserDetails />} />
        <Route path="/update/:id" element={<UserUpdate />} />
      </Routes>
    </Router>
  );
}

export default UserRoutes;
