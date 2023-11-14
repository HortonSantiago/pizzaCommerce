import { BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart" style={{ display: "flex", alignItems: "center" }}>
      <BsFillCartPlusFill badgeContent={total} style={{ cursor: "pointer" }} />
      {total > 0 && (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "red",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          {total}
        </div>
      )}
    </Link>
  );
};

export default CartWidget;
