import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ItemDetail = ({ productSelected, cartQuantity }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "auto",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#000",
    borderRadius: "8px",
    padding: "16px",
  };

  const cardMediaStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const selectedProductTextStyle = {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cartMessageStyle = {
    width: "100%",
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  };

  return (
    <div className="item-detail-container">
      <h1 style={selectedProductTextStyle}>Producto Seleccionado</h1>
      {productSelected ? (
        <Card style={cardStyle}>
          <CardMedia
            component="img"
            alt={productSelected.title}
            style={cardMediaStyle}
            image={productSelected.img}
          />
          <CardContent style={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h5" component="div" style={{ color: "#fff" }}>
              {productSelected.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#fff" }}
            >
              {productSelected.description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ color: "#fff" }}
            >
              Precio: ${productSelected.price}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={cartMessageStyle}
            >
              {cartQuantity > 0
                ? `Tienes ${cartQuantity} unidades en el carrito`
                : "No tienes nada en el carrito, por el momento!"}
              <Link to="/cart">Finalizar compra</Link>
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <p>Producto no seleccionado</p>
      )}
    </div>
  );
};

export default ItemDetail;
