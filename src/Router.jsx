import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "../src/page/LoginPage";
import UserDashboard from "./page/UserDashboard";
import NotFound from "./page/NotFound";
import AdminDashboard from "./page/AdminDashboard";

function RouterComponent() {
  return (
    <Router>
      <Routes>
        {/* Login route default */}
        <Route path="/loginPage" element={<LoginPage />} />

        {/* Admin Dashboard route */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />

        {/* Dashboard route */}
        <Route path="/userDashboard" element={<UserDashboard />} />

        {/* Not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
