import Navbar from "./components/pages/Navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Este es mi Item list container" />
    </>
  );
}
export default App;
