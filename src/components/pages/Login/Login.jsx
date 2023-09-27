import { useState } from "react";

export const Login = () => {
  const [nombre, setNombre] = useState("pepe");

  const changeName = () => {
    if (nombre === "pepe") {
      setNombre("juan");
    } else {
      setNombre("pepe");
    }
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <button onClick={changeName}> Cambiar nombre</button>
      {/* OTRA MANERA DE HACER LO MISMO SIN DECLARAR LA VARIABLE ARRIBA
       <button onClick={() => setNombre("juan")}>Cambiar nombre</button> */}
    </div>
  );
};

export default Login;
