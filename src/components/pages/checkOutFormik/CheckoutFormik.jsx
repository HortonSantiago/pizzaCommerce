import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; // Importa Link

export const CheckOutFormik = () => {
  const { handleChange, handleSubmit, errors, touched, isValid, dirty } =
    useFormik({
      initialValues: {
        primerNombre: "",
        segundoNombre: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      onSubmit: (data) => {
        console.log("Se envió el formulario");
        console.log(data);
      },
      validateOnChange: false,
      validationSchema: Yup.object({
        primerNombre: Yup.string()
          .required("El nombre es obligatorio")
          .min(2, "El nombre debe tener al menos 2 caracteres")
          .max(20, "El nombre no puede tener más de 20 caracteres"),
        segundoNombre: Yup.string()
          .required("El apellido es obligatorio")
          .min(2, "El apellido debe tener al menos 2 caracteres")
          .max(20, "El apellido no puede tener más de 20 caracteres"),
        email: Yup.string()
          .email("Ingrese un email válido")
          .required("El email es obligatorio"),
        password: Yup.string()
          .required("La contraseña es obligatoria")
          .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{6,15}$/, {
            message:
              "La contraseña debe tener al menos una mayúscula y un carácter especial",
          }),
        repeatPassword: Yup.string()
          .required("La repetición de la contraseña es obligatoria")
          .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      }),
    });

  const getInputProps = (fieldName, label) => ({
    id: `filled-${fieldName}`,
    label: label,
    variant: "filled",
    name: fieldName,
    type: fieldName.includes("password") ? "password" : "text",
    onChange: handleChange,
    error: touched[fieldName] && Boolean(errors[fieldName]),
    helperText: touched[fieldName] ? errors[fieldName] : "",
    style: {
      marginBottom: "15px",
      backgroundColor: "white",
    },
  });

  const handleCancelClick = () => {
    // Muestra Sweet Alert para confirmar la cancelación
    Swal.fire({
      title: "¿Estás seguro de cancelar?",
      text: "Tu pedido no será procesado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "No, seguir",
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, redirige a la página del carrito
        console.log("Operación cancelada");
      }
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#F8F0E3",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        ¡Completa tu pedido!
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField {...getInputProps("primerNombre", "Nombre")} />
        <TextField {...getInputProps("segundoNombre", "Apellido")} />
        <TextField {...getInputProps("email", "Email")} type="email" />
        <TextField {...getInputProps("password", "Contraseña")} />
        <TextField
          {...getInputProps("repeatPassword", "Repetir Contraseña")}
          type="password"
        />

        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "#FF4500",
            color: "white",
            marginTop: "20px",
          }}
          disabled={!dirty || !isValid}
        >
          Enviar Pedido
        </Button>
        <Link to="/cart">
          <Button
            variant="contained"
            type="button"
            style={{
              backgroundColor: "#A9A9A9",
              color: "white",
              marginTop: "10px",
            }}
            onClick={handleCancelClick}
          >
            Cancelar
          </Button>
        </Link>
      </form>
    </div>
  );
};
