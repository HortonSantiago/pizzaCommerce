import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";

import Cart from "../Cart/Cart.jsx";
// import { Checkout } from "../checkOut/CheckOut.jsx";
import { CheckOutFormik } from "../checkOutFormik/CheckOutFormik.jsx";

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
