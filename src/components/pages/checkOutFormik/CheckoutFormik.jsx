import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CheckOutFormik = () => {
  const { handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      primerNombre: "",
      segundoNombre: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (data) => {
      console.log("se envió");
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      primerNombre: Yup.string()
        .required("El nombre es obligatorio")
        .min(5, "El nombre debe tener al menos 5 caracteres")
        .max(20, "El nombre no puede tener más de 20 caracteres"),
      segundoNombre: Yup.string()
        .required("El apellido es obligatorio")
        .min(5, "El apellido debe tener al menos 5 caracteres")
        .max(20, "El apellido no puede tener más de 20 caracteres"),
      email: Yup.string()
        .email("Ingrese un email válido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
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
    onChange: handleChange,
    error: touched[fieldName] && Boolean(errors[fieldName]),
    helperText: touched[fieldName] ? errors[fieldName] : "",
    style: {
      borderColor: touched[fieldName] && errors[fieldName] ? "red" : "",
      marginBottom: "15px", // Espaciado uniforme entre los campos
      backgroundColor: "white", // Fondo blanco para todos los campos
    },
  });

  return (
    <div style={{ padding: "100px", backgroundColor: "black" }}>
      <form
        onSubmit={handleSubmit}
        style={{ border: errors && "2px solid red" }}
      >
        <TextField {...getInputProps("primerNombre", "Nombre")} />
        <TextField {...getInputProps("segundoNombre", "Apellido")} />
        <TextField {...getInputProps("email", "Email")} />
        <TextField {...getInputProps("password", "Contraseña")} />
        <TextField {...getInputProps("repeatPassword", "Repetir Contraseña")} />

        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant="contained" type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};
