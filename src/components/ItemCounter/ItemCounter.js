import "./ItemCounter.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemCounter = ({onAdd, isInCart, stock}) => {

  const [counter, setCounter]= useState(1);
   
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

  return (
    <div>
    <div className='counterSection'>
      <button type="button" className="btn btn-outline-info" onClick={handlerCounterUp}>+</button>
      <h5 className='mx-3 text-light'>Cantidad: {counter}</h5>
      <button type="button" className="btn btn-outline-info" onClick={handlerCounterDown}>-</button>
    </div >
    <div className='text-center p-3'>
      
    {!isInCart ? <button className='btn btn-primary mx-2' onClick= {() => onAdd()} >Agregar al carrito</button> : <Link to="./cart"><button className="btn btn-primary mx-2"></button></Link>}
      
    <Link to={`/cart`}>
      <button className="btn btn-primary mx-2">Finalizar compra</button>
    </Link>
    </div>
    </div>
  )
}

export default ItemCounter;