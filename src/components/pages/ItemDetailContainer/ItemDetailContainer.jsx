import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productMock";
import ProductCard from "../../common/productCard/ProductCard";
import Grid from "@mui/material/Grid";
import { CartContext } from "../../context/cartContext";
import CounterContainer from "../../common/CounterContainer/CounterContainer";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const product = products.find((item) => item.id === Number(id));
    if (product) {
      setProductSelected(product);
    }
  }, [id]);

  const onAdd = (cantidad) => {
    // calcula  la cantidad total del cart
    const totalQuantityInCart = cart.reduce((total, item) => {
      if (item.id === productSelected.id) {
        return total + item.quantity;
      }
      return total;
    }, 0);

    // calcular el stock antes de agregar
    const remainingStock = productSelected.stock - totalQuantityInCart;

    // Verificar si la cantidad deseada supera el stock disponible (considerando el carrito)
    if (cantidad > remainingStock) {
      alert("La cantidad deseada supera el stock disponible.");
      return;
    }

    // logica para agregar al cart
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
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      spacing={2}
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
          showAddToCartButton={true}
          onAddToCartClick={() => onAdd(1)}
        />
      </Grid>
      <Grid item>
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </Grid>
    </Grid>
  );
};

export default ItemDetailContainer;
