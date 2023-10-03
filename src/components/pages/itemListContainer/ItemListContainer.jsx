import { CounterContainer } from "../../common/CounterContainer/CounterContainer";
import "./ItemList.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <CounterContainer stock={10} />
    </div>
  );
};

export default ItemListContainer;
