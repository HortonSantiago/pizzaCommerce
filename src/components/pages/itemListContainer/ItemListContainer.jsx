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
      style={{ textAlign: "center", paddingTop: "20px" }}
    >
      {loading ? (
        <BeatLoader color="#36D7B7" loading={loading} size={15} />
      ) : (
        <ItemList filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

export default ItemListContainer;
