import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock, onAdd, initialQuantity }) => {
  const [contador, setContador] = useState(initialQuantity);

  useEffect(() => {
    setContador(initialQuantity);
  }, [initialQuantity]);

  const sumar = () => {
    if (contador < stock) {
      setContador((prevContador) => prevContador + 1);
    } else {
      alert("Cantidad máxima alcanzada");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador((prevContador) => prevContador - 1);
    }
  };

  const handleAddToCart = () => {
    if (contador > stock) {
      alert("Llegaste al máximo de unidades de este producto");
    } else {
      // SE PASA VALOR del contador, no del estado
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
