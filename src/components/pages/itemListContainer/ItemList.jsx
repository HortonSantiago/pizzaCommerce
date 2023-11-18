import Grid from "@mui/material/Grid";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ filteredProducts }) => {
  const determineGridSize = () => {
    const productCount = filteredProducts.length;

    // Ajusta el tamaño de la cuadrícula en función de la cantidad de productos
    if (productCount >= 4) {
      return 3; // Mostrar 4 tarjetas en una fila
    } else if (productCount === 3) {
      return 4; // Mostrar 3 tarjetas en una fila
    } else if (productCount === 2) {
      return 6; // Mostrar 2 tarjetas en una fila
    } else {
      return 12; // Mostrar 1 tarjeta en una fila
    }
  };

  return (
    <div
      className="item-list-container"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <h1>MENU</h1>

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={determineGridSize()} key={product.id}>
            <ProductCard
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.img}
              style={{ minHeight: "600px", maxHeight: "800px" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
