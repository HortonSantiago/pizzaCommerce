import { BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BsFillCartPlusFill
        onClick={() => setCartCount(cartCount + 1)}
        style={{ cursor: "pointer" }}
      />
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
        <span>{cartCount}</span>
      </div>
    </div>
  );
};

export default CartWidget;
