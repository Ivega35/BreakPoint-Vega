import "./App.css";

//components
import NavBar from "./components/NavBar/NavBar.js";
import ItemList from "./components/ItemList/ItemList.js";


const App = () => {
  
    return (
      <div className="App">
        <NavBar/>
        <div className="cards-container">
        <ItemList />
        </div>
      </div>
    );
};
export default App;