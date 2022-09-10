import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import Carrito from "./NavImages/carrito.png"
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () =>{
    return(
      <nav className="navbar navbar-expand-lg bg-dark" >
      <div className="container-fluid" >
        <Link to="/" className="navbar-brand">
          <CartWidget/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">  
              <Link to='/category/palas' className="nav-link">
                palas
              </Link>
            </li> 
            <li className="nav-item">
              <Link to='/category/indumentaria' className="nav-link">
                equipamiento
              </Link>
            </li>
          </ul>
            <Link to='/' className="cart">
              <img class="pr-5" src={Carrito}/>
            </Link>
          
          
        </div>
      </div>
    </nav>
    );
};
export default NavBar;