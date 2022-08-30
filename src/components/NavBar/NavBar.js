import React from "react";
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import Carrito from '../Assets/carrito.png'

const NavBar = () =>{
    return(
      <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><CartWidget/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Equipamiento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Palas</a>
            </li>
          </ul>
          <img class="pr-5" src={Carrito}/>
          
        </div>
      </div>
    </nav>
    );
};
export default NavBar;