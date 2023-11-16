import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  title,
  description,
  price,
  img,
  category,
  showAddToCartButton = true,
  sx = {},
}) {
  console.log("ProductCard Props:", {
    id,
    title,
    description,
    price,
    img,
    category,
    showAddToCartButton,
    sx,
  });

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "black", ...sx }}>
      <CardMedia component="img" alt={title} height="140" image={img} />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "white",
            padding: "8px",
          }}
        >
          {title}
        </Typography>
        {category && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "darkgray" }}
          >
            {category}
          </Typography>
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "white" }}
        >
          {description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          {price} USD
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showAddToCartButton && (
          <Button
            size="small"
            sx={{
              backgroundColor: "brown",
              color: "beige",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Añadir al carrito
          </Button>
        )}
        <Link to={`/itemDetail/${id}`}>
          <Button
            size="small"
            sx={{
              backgroundColor: "beige",
              color: "brown",
              "&:hover": { backgroundColor: "black" },
              marginTop: "10px",
            }}
          >
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
