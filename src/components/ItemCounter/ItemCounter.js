import React, {useState} from 'react'
import "./ItemCounter.css"

const ItemCounter = ({stock}) => {
    const [counter, setCounter]= useState(1);

    const handlerCounterUp = () =>{
        if(counter < stock){
          setCounter(counter+ 1 );
        };
    };
    const handlerCounterDown = () =>{
      if(counter > 1 ){
        setCounter(counter - 1 );
      };
    };
  return (
    
    <div className='counterSection'>
      
      
      <button className="btnCounter" onClick={handlerCounterUp}>+</button>
      <p>Cant:{counter}</p>
      <button className="btnCounter" onClick={handlerCounterDown}>-</button>
      
    </div>
  )
}

export default ItemCounter
