import { Button, Typography, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";

import Swal from "sweetalert2";
import CartContextComponent from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContextComponent);

  const handleDeleteClick = (productId, productName) => {
    Swal.fire({
      title: `¿Quieres eliminar ${productName} del carrito?`,
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductById(productId);
        Swal.fire({
          title: "Eliminado",
          text: `${productName} ha sido eliminado del carrito.`,
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelado",
          text: `${productName} está seguro en tu carrito.`,
          icon: "error",
        });
      }
    });
  };

  const handleDeleteAllClick = () => {
    // Check if the cart is empty
    if (cart.length === 0) {
      // Display a message or do nothing since there are no products to delete
      Swal.fire({
        title: "Carrito vacío",
        text: "No hay productos para eliminar.",
        icon: "info",
      });
      return;
    }

    // Display SweetAlert confirmation if the cart is not empty
    Swal.fire({
      title: "¿Quieres eliminar todos los productos del carrito?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar todos",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Eliminados",
          text: "Todos los productos han sido eliminados del carrito.",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelado",
          text: "Tus productos están seguros en el carrito.",
          icon: "error",
        });
      }
    });
  };

  let total = getTotalPrice();

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "#F8F0E3",
      }}
    >
      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        Tu Carrito
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1" style={{ marginBottom: "20px" }}>
          Tu carrito está vacío. ¡Agrega algunas deliciosas pizzas!
        </Typography>
      ) : (
        <>
          {cart.map((product) => (
            <Paper
              key={product.id}
              elevation={3}
              style={{
                marginBottom: "20px",
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h5">{product.title}</Typography>
                <Typography variant="body1">
                  Precio: ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body1">
                  Cantidad: {product.quantity}
                </Typography>
              </div>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteClick(product.id, product.title)}
              >
                Eliminar
              </Button>
            </Paper>
          ))}

          <Typography variant="h5" style={{ marginTop: "20px" }}>
            Total a Pagar: ${total.toFixed(2)}
          </Typography>

          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="success">
                  Finalizar Compra
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteAllClick}
              >
                Vaciar Carrito
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Cart;
