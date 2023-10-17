import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";

import Layout from "../layout/footer/Layout";
import { CustomTheme } from "../themeConfig";

import { routes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => {
            <Route key={id} path={path} element={<Element />} />;
          })}
        </Route>
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </ThemeProvider>
  );
};

export default AppRouter;
