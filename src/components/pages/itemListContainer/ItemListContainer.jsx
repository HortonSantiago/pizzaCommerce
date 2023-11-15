import { useEffect, useState } from "react";
import { products } from "../../productMock";
import "./ItemList.css";
import { BeatLoader } from "react-spinners";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFilteredProducts = () => {
      if (categoryName) {
        return products.filter((product) => product.category === categoryName);
      } else {
        return products;
      }
    };

    const fetchData = async () => {
      const delay = 4000;
      const filtered = getFilteredProducts();

      if (filtered.length === 0) {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, delay));

        setFilteredProducts(filtered);
        setLoading(false);
      } else {
        setLoading(false);
        setFilteredProducts(filtered);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div
      className="loader-container"
      style={{
        textAlign: "center",
        paddingTop: "20px",
        backgroundColor: "#F8F0E3", // Set your desired pastel color
      }}
    >
      {loading ? (
        <BeatLoader color="#36D7B7" loading={loading} size={15} />
      ) : (
        <div style={{ padding: "20px" }}>
          <ItemList filteredProducts={filteredProducts} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
