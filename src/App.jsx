import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/pages/Route/AppRouter";
import CartContextComponent from "./components/context/cartContext";

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
