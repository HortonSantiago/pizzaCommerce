import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";
import CounterContainer from "../../common/CounterContainer/CounterContainer";
import Swal from "sweetalert2";
import CartContextComponent from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();
  const { cart, addToCart, getQuantityById } = useContext(CartContextComponent);

  useEffect(() => {
    const getProductFromFirebase = async () => {
      try {
        console.log("ID from URL:", id);

        if (!id) {
          console.log("ID no válido");
          return;
        }

        const productDocRef = doc(db, "products", id);
        const productDoc = await getDoc(productDocRef);

        if (productDoc.exists()) {
          console.log("Product from Firebase:", productDoc.data());
          const productData = productDoc.data();
          setProductSelected({ id: productDoc.id, ...productData });
          console.log("ProductSelected:", productData);
        } else {
          console.log("Producto no encontrado en Firebase");
        }
      } catch (error) {
        console.error("Error al obtener el producto desde Firebase", error);
      }
    };

    getProductFromFirebase();
  }, [id]);

  const onAdd = (cantidad) => {
    const quantityInCart = getQuantityById(productSelected.id) || 0;
    const totalQuantity = cantidad + quantityInCart;

    // valida si el total excede la cantidad disponible de stock
    if (totalQuantity > productSelected.stock) {
      // sweet alert
      Swal.fire({
        icon: "error",
        title: "Cantidad máxima alcanzada",
        text: "Llegaste al máximo de unidades de este producto",
      });
    } else {
      let obj = {
        ...productSelected,
        quantity: totalQuantity,
      };

      addToCart(obj);
    }
  };

  const quantityInCart = getQuantityById(productSelected.id) || 0;

  console.log("Current cart contents:", cart);

  if (!productSelected || !productSelected.title) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#f0e5d8",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ItemDetail
          productSelected={productSelected}
          onAdd={onAdd}
          initial={1}
          cartQuantity={quantityInCart}
        />
        <CounterContainer
          stock={productSelected.stock}
          onAdd={onAdd}
          initialQuantity={quantityInCart}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
