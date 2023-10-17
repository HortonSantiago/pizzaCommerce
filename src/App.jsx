import { ThemeProvider } from "@emotion/react";
import Cart from "./components/pages/Cart/Cart";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomTheme } from "./components/themeConfig";

import Layout from "./components/layout/footer/Layout"; // Cambia la importación

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={CustomTheme}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
