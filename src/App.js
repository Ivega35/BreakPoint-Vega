import "./App.css";

//components
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCounter from "./components/ItemCounter/ItemCounter";



const App = () => {
  
    return (
      <div className="App">
        <NavBar/>
        <div className="cards-container">
          <ItemListContainer />
        </div>
      </div>
    );
    };
export default App;