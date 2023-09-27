//import React from 'react';
//import "./App.scss";
// import {Footer} from "./Footer";
// import {Navbar} from "./Navbar";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/Home/Home";
import { Login } from "./components/pages/Login/Login";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let nombre = "Pizzastring";
  const sumar = () => {
    console.log("estoy sumar");
  };

  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer nombre={nombre} edad={12} />
      <h1 style={{ color: "red", fontSize: "2rem" }}>{nombre}</h1>
      <button onClick={sumar}>sumar</button>
    </div>
  );
}
export default App;
