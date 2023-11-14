import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        }
        return elemento; // Agrega esta línea para manejar el caso de map
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]); // Agrega el producto al carrito si no existe
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemeto) => elemeto.id === id);
    return product?.quantity;
  };

  //limpia el carrito
  const clearCart = () => {
    setCart([]);
  };

  // borra producto del carrito
  const deleteProductById = (id) => {
    console.log("el id es: ", id);
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
