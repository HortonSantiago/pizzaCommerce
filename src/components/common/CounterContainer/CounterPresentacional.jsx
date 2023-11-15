import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button
          variant="contained"
          onClick={restar}
          style={{ backgroundColor: "red", color: "white" }}
        >
          -
        </Button>
        <h2>{contador}</h2>
        <Button
          variant="contained"
          onClick={sumar}
          style={{ backgroundColor: "red", color: "white" }}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={() => onAdd(contador)}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Agregar al carrito
        </Button>
        <Link to="/cart">
          <Button
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Ir a pagar
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CounterPresentacional;
