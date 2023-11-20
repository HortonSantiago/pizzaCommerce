import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const delay = 1000;

      try {
        const productsCollection = collection(db, "products");

        // Filtrar productos por categoría
        const filtered =
          categoryName !== undefined
            ? await getFilteredProducts(productsCollection, categoryName)
            : await getAllProducts(productsCollection);

        // Filtrar productos que tienen stock mayor que 0
        const filteredWithStock = filtered.filter(
          (product) => product.stock > 0
        );

        // simulo retraso antes de actualizar el estado
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, delay));

        setFilteredProducts(filteredWithStock);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  const getAllProducts = async (collectionRef) => {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
  };

  const getFilteredProducts = async (collectionRef, category) => {
    const filteredCollection = query(
      collectionRef,
      where("category", "==", category)
    );
    const snapshot = await getDocs(filteredCollection);
    return snapshot.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
  };

  return (
    <div
      className="loader-container"
      style={{
        textAlign: "center",
        paddingTop: "20px",
        backgroundColor: "#F8F0E3", // pastel
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <BeatLoader color="#36D7B7" loading={loading} size={15} />
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "50px",
            justifyContent: "center",
          }}
        >
          <ItemList filteredProducts={filteredProducts} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
