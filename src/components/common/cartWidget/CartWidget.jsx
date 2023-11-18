import { BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link
      to="/cart"
      style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
    >
      <div style={{ position: "relative", marginRight: "10px" }}>
        <BsFillCartPlusFill size={30} style={{ cursor: "pointer" }} />
        {total > 0 && (
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#FF4500",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {total}
          </div>
        )}
      </div>
      <span style={{ fontSize: "1.2rem" }}>Carrito</span>
    </Link>
  );
};

export default CartWidget;
