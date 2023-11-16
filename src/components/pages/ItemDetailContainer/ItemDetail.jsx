import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ItemDetail = ({ productSelected, cartQuantity }) => {
  // Estilos en línea
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "auto",
    marginBottom: "20px", // Ajusta el margen inferior según tus necesidades
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#000", // Color de fondo negro
    borderRadius: "8px", // Bordes redondeados
    padding: "16px", // Espaciado interno
  };

  const cardMediaStyle = {
    width: "100%", // Imágenes ocupan todo el ancho
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px", // Bordes redondeados
  };

  return (
    <div className="item-detail-container">
      <h1 style={{ textAlign: "center", color: "#fff" }}>
        Producto Seleccionado
      </h1>
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
              style={{ color: "#fff" }}
            >
              Ya tienes {cartQuantity} en el carrito
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
