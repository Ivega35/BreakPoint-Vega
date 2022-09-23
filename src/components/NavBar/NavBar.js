import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import Carrito from "./NavImages/carrito.png"
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useContexto } from "../Context/Context";

const NavBar = () =>{
  const {carrito, cantidadTotal} = useContexto();

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
          {carrito.length > 0 ? (
            <Link to='/cart' className="cart">
              <div className="d-flex align-items-center bg-info px-2 rounded">
               <img class="pr-5" src={Carrito} alt="Cart"/>
               <p className="text-dark fw-bold fs-2 px-3 pt-2 ">{cantidadTotal}</p>
              </div>
            </Link>) : null}
          
          
        </div>
      </div>
    </nav>
    );
};
export default NavBar;