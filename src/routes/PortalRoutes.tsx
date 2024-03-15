import React, { FC } from "react";
import {Routes, Route} from "react-router-dom"; 
import Dashboard from "../components/Dashboard/Dashboard";
import Reports from "../components/Reports/Reports";

const PortalRoutes: React.FC = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={<Reports />}
        />
          <Route
          path="/reports"
          element={<Dashboard />}
        />
       </Routes>
  );
};

export default PortalRoutes;
