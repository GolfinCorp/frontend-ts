import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { AdminRoutes, PublicRoutes } from "@/pages";
import RequireAuth from "./RequireAuth";
import Utils from "./Utils";

const Routes = () => {
  const { generateRoutes } = Utils;
  return (
    <BrowserRouter>
      <ReactRoutes>
        {generateRoutes(PublicRoutes)}
        <Route element={<RequireAuth allowedRoles={"admin"} />}>
          {generateRoutes(AdminRoutes.routes, AdminRoutes.wraper)}
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
