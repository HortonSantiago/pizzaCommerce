import { useParams } from "react-router-dom"; // Si estás utilizando React Router para manejar las rutas
import { products } from "../../productMock";

const ItemDetailContainer = () => {
  const { productId } = useParams(); // Obtén el ID del producto de la URL

  // Encuentra el producto con el ID correspondiente
  const product = products.find((item) => item.id === Number(productId));

  // Verifica si el producto se encontró
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderiza los detalles del producto
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.img} alt={product.title} />
    </div>
  );
};

export default ItemDetailContainer;
