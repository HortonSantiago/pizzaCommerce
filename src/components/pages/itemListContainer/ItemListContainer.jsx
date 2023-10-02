import { useState } from "react";
import ProductCard from "../../common/cartWidget/ProductCard/ProductCard";

function ItemListContainer() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          width: 150,
          height: 50,
        }}
        onClick={toggleMenu}
      >
        Menú de Pizzas
      </button>
      {menuVisible && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <ProductCard
            id={1}
            name="Pizza Napoletana"
            description="Pizza de mozzarella y tomates frescos."
            price={10.99}
            image="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
          />
          <ProductCard
            id={2}
            name="Pizza Pepperoni"
            description="Pizza con pepperoni y queso fundido."
            price={12.99}
            image="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
          />
          <ProductCard
            id={3}
            name="Pizza Pesto"
            description="Pesto y queso fundido."
            price={12.99}
            image="https://underpizza-image-storage.s3.us-east-2.amazonaws.com/sides/dEcc48jAvLAM5t2KY/0.webp"
          />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
