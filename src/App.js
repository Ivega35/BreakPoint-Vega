import react from "react";
import "./style.css";
import ejemplo from "./components/Assets/ejemp.jpg"

import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

class App extends react.Component{
  render(){
    return (
      <div className="App">
        <NavBar/>
        <ItemListContainer 
        tittle="Nombre del Producto"
        description="descripcion del producto"
        price="precio del producto"
        img={ejemplo}/>
      </div>
    )
  }
}
export default App;