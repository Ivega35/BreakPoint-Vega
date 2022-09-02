import "./App.css";

//components
import NavBar from "./components/NavBar/NavBar.js";
import ItemList from "./components/ItemList/ItemList.js";
import ItemCounter from "./components/ItemCounter/ItemCounter";



const App = () => {
  const onAdd = (cant) =>{
    console.log(`compraste ${cant} unidades`)
}
    return (
      <div className="App">
        <NavBar/>
        <div className="cards-container">
        <ItemList />
        </div>
        <div className="CounterSection">
        <ItemCounter initial={1} stock={5} onAdd={onAdd}/>
        </div>
        
      </div>
    );
    };
export default App;