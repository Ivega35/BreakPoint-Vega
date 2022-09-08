import React from "react";
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import Carrito from "./NavImages/carrito.png"
import { Link } from "react-router-dom";

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
              <Link to='/' className="Link">
                Home
              </Link>
              <Link to='/category/palas' className="Link">
                palas
              </Link>
              <Link to='/category/indumentaria' className="Link">
                equipamiento
              </Link>
          </ul>
          <Link to='/' className="Link">
            <img class="pr-5" src={Carrito}/>
            </Link>
          
          
        </div>
      </div>
    </nav>
    );
};
export default NavBar;