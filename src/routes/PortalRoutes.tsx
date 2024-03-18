import React from "react";
import {Routes, Route} from "react-router-dom"; 
import Dashboard from "../components/Dashboard/Dashboard";
import Reports from "../components/Reports/Reports";

const PortalRoutes: React.FC = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
          <Route
          path="/reports"
          element={<Reports />}
        />
       </Routes>
  );
};

export default PortalRoutes;
