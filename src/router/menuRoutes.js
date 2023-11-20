import Cart from "../components/pages/cart/Cart.jsx";

import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer.jsx";
import { CheckoutFormik } from "../components/pages/checkOutFormik/CheckoutFormik.jsx";

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
    Element: CheckoutFormik,
  },
];
