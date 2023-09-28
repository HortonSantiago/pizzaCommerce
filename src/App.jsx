import { ThemeProvider } from "@emotion/react";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/pages/Navbar/Navbar";
import { CustomTheme } from "./components/themeConfig";

function App() {
  let nombre = "Pizzastring";
  const sumar = () => {
    console.log("estoy sumar");
  };

  return (
    <div>
      <ThemeProvider theme={CustomTheme}> HOOOO</ThemeProvider>

      <Navbar />
      <Home />

      <h1 style={{ color: "red", fontSize: "2rem" }}>{nombre}</h1>
      <button onClick={sumar}>sumar</button>
    </div>
  );
}
export default App;
