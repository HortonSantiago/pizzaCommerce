import Cart from "../components/pages/Cart/Cart.jsx";

import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer.jsx";
import { CheckOutFormik } from "../components/pages/checkOutFormik/CheckoutFormik.jsx";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOutFormik,
  },
];
