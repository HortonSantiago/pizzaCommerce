import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const CheckOutFormik = () => {
  const { handleChange, handleSubmit, errors, touched, isValid, isSubmitting } =
    useFormik({
      initialValues: {
        primerNombre: "",
        segundoNombre: "",
        email: "",
        telefono: "",
        password: "",
        repeatPassword: "",
      },
      onSubmit: async () => {
        try {
          const orderId = await saveOrderToDatabase();

          // Show SweetAlert success
          Swal.fire({
            icon: "success",
            title: "Compra realizada con éxito",
            text: `Número de orden: ${orderId}`,
          });

          console.log(
            "Orden guardada en la base de datos. Número de orden:",
            orderId
          );
        } catch (error) {
          console.error("Error al guardar la orden:", error);
        }
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
        telefono: Yup.string().required("El teléfono es obligatorio"),
        password: Yup.string()
          .required("La contraseña es obligatoria")
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
            message:
              "La contraseña debe tener al menos una mayúscula y ser alfanumérica",
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
      marginBottom: "15px",
      backgroundColor: "white",
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
        <TextField {...getInputProps("telefono", "Teléfono")} />
        <TextField {...getInputProps("password", "Contraseña")} />
        <TextField {...getInputProps("repeatPassword", "Repetir Contraseña")} />

        {/* 'Realizar Compra' button is disabled only during form submission */}
        <Button
          variant="contained"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Realizar Compra
        </Button>
        <Button variant="contained" type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

async function saveOrderToDatabase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("12345");
    }, 1000);
  });
}
