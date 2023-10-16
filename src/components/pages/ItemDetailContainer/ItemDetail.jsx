const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="item-detail-container">
      <h1>Selected Product</h1>
      {productSelected ? (
        <div>
          <h2>{productSelected.title}</h2>
          <p>{productSelected.description}</p>
          <p>Price: ${productSelected.price}</p>
          <img src={productSelected.img} alt={productSelected.title} />
          <button onClick={() => onAdd(1)}>Add to Cart</button>
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default ItemDetail;
