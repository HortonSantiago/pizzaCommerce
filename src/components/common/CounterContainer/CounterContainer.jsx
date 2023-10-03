import { useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad maxima");
    }
  };

  return <Counter sumar={sumar} restar={restar} contador={contador} />;
};
