import { ThemeProvider } from "@emotion/react";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/pages/Navbar/Navbar";
import { CustomTheme } from "./components/themeConfig";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { useState } from "react";

function App() {
  let nombre = "Pizzastring";
  const [cartCount, setCartCount] = useState(0);

  const sumar = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div>
      <ThemeProvider theme={CustomTheme}> HOOOO</ThemeProvider>
      <Navbar />
      <ItemListContainer />
      <Home />
      <ItemListContainer />
      <h1 style={{ color: "red", fontSize: "2rem" }}>{nombre}</h1>
      <button onClick={sumar}>sumar</button>
    </div>
  );
}
export default App;
