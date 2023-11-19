import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/footer/Layout";

import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} index path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default AppRouter;
