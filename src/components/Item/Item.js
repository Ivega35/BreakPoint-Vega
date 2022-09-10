import "./Item.css"
import React from 'react';
import { Link } from "react-router-dom";


const Item = ({id, title, price, pictureUrl}) => {
    
    
    return (     
        <div className="card">
            <div className="d-flex justify-content-center">
                <img src={pictureUrl} className="card-img-top" alt={title}/>
            </div>
            
            <div className="card-body bg-dark">
                <h4 className="card-title text-center text-light">{title}</h4>
                <p className="card-text text-center text-light pt-4 fs-5">Precio: ${price}</p>
            </div>
            <div className="d-flex justify-content-center pb-3">
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-info">ver detalles</button>
                </Link>
            </div>
        </div>
            
    
          
       
  );
}


export default Item
