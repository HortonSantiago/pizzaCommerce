import { CounterContainer } from "../../common/CounterContainer/CounterContainer";
import { products } from "../../productMock";
import "./ItemList.css";
import ProductCard from "../../common/productCard/ProductCard";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getFilteredProducts = () => {
      if (categoryName) {
        // Filtra product x la categoría
        return products.filter((product) => product.category === categoryName);
      } else {
        return products;
      }
    };

    const filtered = getFilteredProducts();
    setFilteredProducts(filtered);
  }, [categoryName]);

  return (
    <div className="item-list-container" style={{ minHeight: "100vh" }}>
      <h1>ESTE ES MI MENU</h1>
      <CounterContainer stock={10} />

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

export default ItemListContainer;
