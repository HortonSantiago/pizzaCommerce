import { BsFillCartPlusFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" style={{ display: "flex", alignItems: "center" }}>
      <BsFillCartPlusFill style={{ cursor: "pointer" }} />
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
      ></div>
    </Link>
  );
};

export default CartWidget;
