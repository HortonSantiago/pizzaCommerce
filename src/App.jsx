import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/pages/Route/AppRouter.jsx";
import CartContext from "./components/context/cartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <AppRouter />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
