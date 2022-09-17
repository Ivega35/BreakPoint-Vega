import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import Cart from "./components/Cart/Cart"
import CustomProvider from './components/Context/Context';

function App() {
  return (
    
    <CustomProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productoId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
    </BrowserRouter>
    </CustomProvider>
    
    
  );
}

export default App;