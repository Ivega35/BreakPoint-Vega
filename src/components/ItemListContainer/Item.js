
import "./ItemListContainer.css"
import ItemCounter from '../ItemCounter/ItemCounter'
import React from 'react';
import { Link } from "react-router-dom";


const Item = ({id, title, price, pictureUrl,}) => {
    
    
    return (     
        <div className="itemCard" >
            <img src={pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{price}</p>
            </div>
            
            <Link to={`/detail/${id}`}>
             <button>ver detalles</button>
            </Link>
        </div>
    
          
       
  );
}


export default Item
