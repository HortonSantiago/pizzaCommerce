import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/router/AppRouter.jsx";
import CartContextComponent from "./components/context/cartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
