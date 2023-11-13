const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <div className="item-detail-container">
      <h1>Selected Product</h1>
      {productSelected ? (
        <div>
          <h2>{productSelected.title}</h2>
          <p>{productSelected.description}</p>
          <p>Price: ${productSelected.price}</p>
          <h5> ya tines {initial} en el carrito</h5>
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
