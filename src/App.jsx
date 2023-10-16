import Cart from "./components/pages/Cart/Cart";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/pages/Navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
<Route path="/" element={<ItemListContainer />} />;
