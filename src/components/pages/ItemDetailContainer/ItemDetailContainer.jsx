import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ProductCard from "../../common/productCard/ProductCard";
import Grid from "@mui/material/Grid";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Grid
      container
      justifyContent="center" // Centra horizontalmente
      alignItems="center" // Centra verticalmente
      style={{ height: "100vh" }} // Ocupa el 100% de la altura del viewport
    >
      <Grid item>
        <ProductCard
          id={product.id}
          category={product.category}
          title={product.title}
          description={product.description}
          price={product.price}
          img={product.img}
        />
      </Grid>
    </Grid>
  );
};

export default ItemDetailContainer;
