import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initialQuantity }) => {
  const [contador, setContador] = useState(initialQuantity);

  useEffect(() => {
    setContador(initialQuantity);
  }, [initialQuantity]);

  const sumar = () => {
    if (contador < stock) {
      setContador((prevContador) => prevContador + 1);
    } else {
      // Replace the default alert with SweetAlert
      Swal.fire({
        icon: "error",
        title: "Cantidad máxima alcanzada",
        text: "Llegaste al máximo de unidades disponibles de este producto",
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador((prevContador) => prevContador - 1);
    }
  };

  const handleAddToCart = () => {
    if (contador > stock) {
      // Replace the default alert with SweetAlert
      Swal.fire({
        icon: "error",
        title: "Cantidad máxima alcanzada",
        text: "Llegaste al máximo de unidades de este producto",
      });
    } else {
      // Pass the value of the contador, not the state
      onAdd(contador);
    }
  };

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={handleAddToCart}
    />
  );
};

export default CounterContainer;
