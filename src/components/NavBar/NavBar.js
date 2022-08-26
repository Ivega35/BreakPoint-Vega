import React from "react";
import "./NavBar.css"
import cartWidget from "../Assets/cartWidget.png"

const NavBar = () =>{
    return(
      <nav class="navbar navbar-expand-lg bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Break Point- Paddel Store</a>
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
          <img class="pr-5" src={cartWidget}/>
          
        </div>
      </div>
    </nav>
    );
};
export default NavBar;