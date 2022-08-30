import react from "react";
import "./style.css";
import ejemplo from "./components/Assets/ejemp.jpg"

import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";


const App = () => {
  
    return (
      <div className="App">
        <NavBar/>
        <div className="cardSection">
        <ItemListContainer 
        tittle="Nombre del Producto"
        description="descripcion del producto"
        price="precio del producto"
        stock="5"
        img={ejemplo}/>

        <ItemListContainer 
        tittle="Nombre del Producto"
        description="descripcion del producto"
        price="precio del producto"
        stock="3"
        img={ejemplo}/>
        <ItemListContainer 
        tittle="Nombre del Producto"
        description="descripcion del producto"
        price="precio del producto"
        stock="0"
        img={ejemplo}/>
        </div>
      </div>
    )
}
export default App;