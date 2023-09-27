// aca vamso a mostrar nuestros productos
const ItemListContainer = ({ nombre, edad }) => {
  return (
    <div>
      <h4>hola {nombre} como estas?</h4>
      <h5>mi edad es {edad}</h5>
    </div>
  );
};

export default ItemListContainer;
