import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <div>
      <h1> ESTOY EN Cart</h1>;
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>{product.quantity}</h2>
        </div>
      ))}
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
