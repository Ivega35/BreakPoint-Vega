import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//components
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";




const App = () => {
  
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productoId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
      </Router>
    );
    };
export default App;