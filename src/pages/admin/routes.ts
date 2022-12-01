import { Route } from "react-router-dom";
import { RouteI } from "@/types/routes/routes";
import Dashboard from "./dashboard/Dashboard";
import Members from "./members/Members";
import { DashboardLayout } from "@/components/organisms";

const routes: RouteI[] = [
  {
    path: "",
    element: Dashboard,
  },
  {
    path: "members",
    element: Members,
  },
];

const wraper: RouteI = {
  path: "/admin",
  element: DashboardLayout,
};

const AdminRoutes = { routes, wraper };
export default AdminRoutes;
