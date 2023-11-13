import { useState } from "react";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    primerNombre: "",
    segundoNombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    primerNombre: null,
    segundoNombre: null,
    email: null,
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log(userInfo);

    if (userInfo.primerNombre.length < 5) {
      setErrors({
        ...errors,
        primerNombre: "El nombre debe tener al menos 5 caracteres",
        segundoNombre: null, // Resetting other errors
        email: null,
      });
      return;
    }

    if (!userInfo.email.includes("@")) {
      setErrors({
        ...errors,
        primerNombre: null, // Resetting other errors
        segundoNombre: null,
        email: "No corresponde a un email válido",
      });
      return;
    }

    console.log(userInfo);

    // If validation passes, you can proceed with your form submission logic here
  };

  return (
    <div>
      <h1>Check Out</h1>
      <form onSubmit={manejarEnvio}>
        <label htmlFor="primerNombre">Primer Nombre:</label>
        <input
          type="text"
          id="primerNombre"
          name="primerNombre"
          placeholder="Nombre"
          onChange={handleChange}
        />
        {errors.primerNombre && (
          <div style={{ color: "red" }}>{errors.primerNombre}</div>
        )}

        <label htmlFor="segundoNombre">Segundo Nombre:</label>
        <input
          type="text"
          id="segundoNombre"
          name="segundoNombre"
          placeholder="Apellido"
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

        <button type="submit">Enviar</button>
        <button type="button" onClick={() => console.log("se cancela")}>
          cancelar
        </button>
      </form>
    </div>
  );
};
