import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  category,
  title,
  description,
  price,
  img,
}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "lightgray" }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={img} // Usamos la imagen pasada como prop
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            backgroundColor: "darkgray",
            display: "flex",
            justifyContent: "center",
            color: "black",
            padding: "8px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "darkgray" }}
        >
          ID: {id}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "darkgray" }}
        >
          Category: {category}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "darkgray" }}
        >
          {description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "darkgray" }}
        >
          Price: {price} USD
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
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
        <Link to={`/itemDetail/${id}`}>
          <Button
            size="small"
            sx={{
              backgroundColor: "beige",
              color: "brown",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
