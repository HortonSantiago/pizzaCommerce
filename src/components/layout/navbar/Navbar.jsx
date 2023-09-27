import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>LOGO</h4>
      <ul>
        <li>Pizzas</li>
        <li>Panes</li>
        <li>Focaccias</li>
      </ul>
      {/* WIDGET CARRITO */}
      <CartWidget />
    </div>
  );
};
