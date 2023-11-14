import { Route, Routes } from "react-router-dom";

import Layout from "../../layout/footer/Layout";
import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default AppRouter;
