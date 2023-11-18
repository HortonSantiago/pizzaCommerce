import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button, TextField, Typography, Link } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { db } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export const CheckOutFormik = () => {
  const cartContext = useContext(CartContext);

  const { handleChange, handleSubmit, errors, touched, isSubmitting } =
    useFormik({
      initialValues: {
        primerNombre: "",
        segundoNombre: "",
        email: "",
        telefono: "",
        password: "",
        repeatPassword: "",
      },
      onSubmit: async (values) => {
        try {
          const orderId = await saveOrderToDatabase(values, cartContext.cart);

          cartContext.clearCart();

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
    type: fieldName.includes("password") ? "password" : "text",
    onChange: handleChange,
    error: touched[fieldName] && Boolean(errors[fieldName]),
    helperText: touched[fieldName] ? errors[fieldName] : "",
    style: {
      borderColor: touched[fieldName] && errors[fieldName] ? "red" : "",
      marginBottom: "15px",
      backgroundColor: "white",
    },
  });

  const handleCancelClick = () => {
    Swal.fire({
      title: "¿Estás seguro de cancelar?",
      text: "Tu pedido no será procesado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4500",
      cancelButtonColor: "#A9A9A9",
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "No, seguir",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/cart";
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
        <TextField {...getInputProps("email", "Email")} />
        <TextField {...getInputProps("telefono", "Teléfono")} />
        <TextField {...getInputProps("password", "Contraseña")} />
        <TextField
          {...getInputProps("repeatPassword", "Repetir Contraseña")}
          type="password"
        />
        <Link to="/">
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#FF4500",
              color: "white",
              marginTop: "10px",
            }}
          >
            Realizar Compra
          </Button>
        </Link>

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

async function saveOrderToDatabase(values, cart) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const orderData = {
    buyer: {
      primerNombre: values.primerNombre,
      segundoNombre: values.segundoNombre,
      email: values.email,
      telefono: values.telefono,
    },
    items: cart,
    total: total.toString(),
    date: new Date(),
  };

  const docRef = await addDoc(collection(db, "orders"), orderData);

  cart.forEach(async (elemento) => {
    try {
      const productRef = doc(db, "products", elemento.id);
      await updateDoc(productRef, {
        stock: elemento.stock - elemento.quantity,
      });
    } catch (error) {
      console.error("Error al actualizar el stock del producto:", error);
    }
  });

  return docRef.id;
}
