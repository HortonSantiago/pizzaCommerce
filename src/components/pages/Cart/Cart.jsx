import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  return (
    <div>
      <h1> ESTOY EN Cart</h1>;
      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <h2>Cantidad: {product.quantity}</h2>
          <Button onClick={() => deleteProductById(product.id)}>
            Eliminar
          </Button>
        </div>
      ))}
      <h2>El total a pagar es: {total}</h2>
      <Link to="/checkout">
        <Button variant="contained">finalizar compra</Button>
        <Button variant="contained" onClick={clearCart}>
          reset cart
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
