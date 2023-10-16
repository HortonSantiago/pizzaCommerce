import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/pages/Navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}
export default App;
