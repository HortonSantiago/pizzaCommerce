import Grid from "@mui/material/Grid";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ filteredProducts }) => {
  return (
    <div className="item-list-container" style={{ minHeight: "100vh" }}>
      <h1>ESTE ES MI MENU</h1>

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.img}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
