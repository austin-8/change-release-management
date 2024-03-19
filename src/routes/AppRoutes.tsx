import React, { FC } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PortalLayout from "../components/Layout/PortalLayout";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";

const AppRoutes: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={isLoggedIn ? <PortalLayout /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
