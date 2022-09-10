import React, {useState} from 'react'
import "./ItemCounter.css"

const ItemCounter = ({initial, stock, onAdd}) => {
    const [counter, setCounter]= useState(initial);

    const handlerCounterUp = () =>{
        
      if(counter < stock){
          setCounter(counter + 1 );
        };
    };
    const handlerCounterDown = () =>{
      if(counter > 1 ){
        setCounter(counter - 1 );
      };
    };
  return (
    <div>
    <div className='counterSection'>
      <button type="button" className="btn btn-outline-info" onClick={handlerCounterUp}>+</button>
      <h5 className='mx-3 text-light'>Cantidad: {counter}</h5>
      <button type="button" className="btn btn-outline-info" onClick={handlerCounterDown}>-</button>
    </div >
    <div className='text-center p-3'>
      <a href='#' className='btn btn-primary' onClick= {() => onAdd(counter)} >Agregar al carrito</a>
    </div>
    </div>
  )
}

export default ItemCounter;