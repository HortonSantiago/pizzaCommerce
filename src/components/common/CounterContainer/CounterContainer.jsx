import { useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({ stock, onAdd, initial }) => {
  const [contador, setContador] = useState(initial);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad máxima");
    }
  };

  return (
    <Counter
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
      initial={contador}
    />
  );
};
