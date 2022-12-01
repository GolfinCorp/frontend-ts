import { Route } from "react-router-dom";
import { RouteI } from "@/types/routes/routes";

const randomIdGenerator = () => {
  return Math.floor(Math.random() * 100);
};

const generateRoutes = (routeArray: RouteI[], wraper?: RouteI) => {
  const routeLayout = routeArray.map((route) => {
    return (
      <Route
        path={route.path}
        element={<route.element />}
        key={`${route.path}${randomIdGenerator()}`}
      />
    );
  });
  return wraper ? (
    <Route path={wraper.path} element={<wraper.element />}>
      {routeLayout}
    </Route>
  ) : (
    <>{routeLayout}</>
  );
};

const Utils = { generateRoutes };
export default Utils;
