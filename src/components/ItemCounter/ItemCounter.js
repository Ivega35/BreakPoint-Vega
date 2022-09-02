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
      <button className="btnCounter" onClick={handlerCounterUp}>+</button>
      <h5>Cantidad: {counter}</h5>
      <button className="btnCounter" onClick={handlerCounterDown}>-</button>
    </div>
    <button className='btnCart' onClick= {() => onAdd(counter)} >Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter;