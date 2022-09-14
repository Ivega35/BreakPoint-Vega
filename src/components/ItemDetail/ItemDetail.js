
import React, { useState } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'

const ItemDetail = ( {title, price, description, pictureUrl, stock } ) => {
  
  const [counter, setCounter]= useState(1);
  const [cart, setCart]= useState(); 
  
  const cartItem ={
    "title": title, 
    "price": price, 
    "img": pictureUrl, 
    "cant": counter
  };
  const handlerCounterUp = () =>{
      
    if(counter < stock){
        setCounter(counter + 1 );
      };
  }
  const handlerCounterDown = () =>{
    if(counter > 1 ){
      setCounter(counter - 1 );
    };
  }

  const onAdd = () =>{
 
    if(stock !== 0 ){  
      setCart(cartItem);
      console.log(cart);
      
    }else{
      alert(`El producto: ${title} se encuentra agotado!`)
    };

     
}
  return (
    
  <div className="detailCard">
    <div className="row g-0 py-3">
      <div className="col-md-4 text-center">
        <img src={pictureUrl} className="img-fluid" alt={title}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title text-light text-center">{title}</h1>
          <p className="card-text text-light text-center px-5 py-4">{description}</p>
          <p className="card-text text-light fs-5 text-center"> <strong> Precio: ${price} </strong> </p>
          <p className="card-text text-light text-center">Stock: {stock}</p>
          <div>
        {cart === cartItem ? <p>El producto fue añadido al carrito con exito!</p> : <ItemCounter onAdd={onAdd} countUp={handlerCounterUp} countDown={handlerCounterDown} cant={counter}/>} 
        </div>
        </div>
        
       
      </div>
    </div>
  </div>

  )
}


export default ItemDetail;

