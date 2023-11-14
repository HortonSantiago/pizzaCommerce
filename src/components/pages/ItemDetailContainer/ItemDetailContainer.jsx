import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ProductCard from "../../common/productCard/ProductCard";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../context/cartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);
  console.log(totalQuantity);

  useEffect(() => {
    const product = products.find((item) => item.id === Number(id));
    if (product) {
      setProductSelected(product);
    }
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(obj);
  };

  if (!productSelected.id) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <ProductCard
          id={productSelected.id}
          category={productSelected.category}
          title={productSelected.title}
          description={productSelected.description}
          price={productSelected.price}
          img={productSelected.img}
          stock={productSelected.stock}
        />
        <button onClick={() => onAdd(1)}>Agregar al carrito</button>
      </Grid>
    </Grid>
  );
};

export default ItemDetailContainer;
